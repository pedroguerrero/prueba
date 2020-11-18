import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function Dialog({ open, children }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 500,
      left: 'calc(50% - 250px)',
      top: '100px',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = useStyles();

  return (
    <Modal open={open}>
      <div className={classes.paper}>{children}</div>
    </Modal>
  );
}

export default Dialog;
