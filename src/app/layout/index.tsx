import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Left from './left';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '100%'
  },
  left: {
    width: '200px',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
  },
  right: {
    width: 'calc(100% - 200px)',
    height: '100%',
    marginLeft: '200px'
  }
}));

const Layout = ({children}: any) =>{
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}><Left/></div>
      <div className={classes.right}>{children}</div>
    </div>
  )
}

export default Layout;