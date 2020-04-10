import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Icons as IconsView,
    
  SignUp as SignUpView,
  SignIn as SignInView,
  
  CodePlatform as CodePlatformView,
  Explore as ExploreView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
   
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
  
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
  
      <RouteWithLayout
        component={CodePlatformView}
        exact
        layout={MinimalLayout}
        path="/codeplatform"
      />

      <RouteWithLayout
        component={ExploreView}
        exact
        layout={MainLayout}
        path="/explore"
      />
      <Redirect to="/dashboard" />
    </Switch>
  );
};

export default Routes;
