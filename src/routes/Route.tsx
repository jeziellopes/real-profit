import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  path: string,
  // eslint-disable-next-line
  component: any;
  exact: boolean;
}

const RouteWrapper = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Component {...routeProps} />
      )}
    />
  );
};

export default RouteWrapper;
