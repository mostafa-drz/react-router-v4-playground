import React from 'react';
import DynamicImport from './DynamicImport';

export const Home = (props) => (
  <DynamicImport load={() => import('./Home')}>
    {(Component) => Component === null ? <div>Loading...</div>
      : <Component {...props} />
    }
  </DynamicImport>
)

export const Teams = (props) => (
  <DynamicImport load={() => import('./Teams')}>
    {(Component) => Component === null ? <div>Loading...</div>
      : <Component {...props} />
    }
  </DynamicImport>
)

export const Players = (props) => (
  <DynamicImport load={() => import('./Players')}>
    {(Component) => Component === null ? <div>Loading...</div>
      : <Component {...props} />
    }
  </DynamicImport>
)

export const TeamPage = (props) => (
  <DynamicImport load={() => import('./TeamPage')}>
    {(Component) => Component === null ? <div>Loading...</div>
      : <Component {...props} />
    }
  </DynamicImport>
)

export const Articles = (props) => (
  <DynamicImport load={() => import('./Articles')}>
    {(Component) => Component === null ? <div>Loading...</div>
      : <Component {...props} />
    }
  </DynamicImport>
)