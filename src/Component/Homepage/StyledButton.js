import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #f99f31 30%, #FF8E53 90%)',
    borderRadius: '0.5rem',
    color: 'white',
    height: 48,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    width: '40rem'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default StyledButton;