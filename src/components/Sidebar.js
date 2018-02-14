import React from 'react';
import { Route, Link } from 'react-router-dom';
import slug from 'slug';
function CustomLink({ to, children }){
  return(
    <Route 
      path={to.pathname}
      children={({ match }) => (
        <li style={{ listStyle:'none', fontWeight: match ? 'bold' : 'normal' }}>
          <Link to={to}>{children}</Link>
        </li>
      )}
    />
  )
}
export default function Sidebar({ title, list, loading, location, match }){
    return loading===true ? <h1>Loading....</h1>
            : <div>
                <h3 className="header">{title}</h3>
                <ul className="sidebar-list">
                  { list.map((item) => {
                    console.group();
                    console.log(location);
                    console.log(match);
                    console.groupEnd();
                    return (
                    <CustomLink 
                      key={item}
                      to={{
                        pathname: `${match.url}/${slug(item)}`,
                        search: location.search
                      }}
                    >
                      {item.toUpperCase()}
                    </CustomLink>
                  )})}
                </ul>
             </div>

}
