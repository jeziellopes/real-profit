/* eslint-disable react/destructuring-assignment */
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Title(props: Props) {
  return (
    <Typography component="h2" variant="h6" gutterBottom color="primary">
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
