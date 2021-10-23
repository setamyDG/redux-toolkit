import React, { FC } from 'react';
import { Home } from '@views';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from '@components/layout';

const Routes: FC = () => (
  <BrowserRouter basename='/'>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='*'>
          <div>404</div>
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
