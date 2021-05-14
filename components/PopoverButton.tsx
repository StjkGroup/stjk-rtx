/**
 * Create by fay on 2018-10-17 09:28
 */
import React from 'react';
import Popover from '@material-ui/core/Popover';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      minWidth: '30px',
      height: '30px',
      '&:hover': {
        borderRadius: '2px',
        backgroundColor: '#dddddd'
      }
    },
    checked: {
      color: theme.palette.primary.main,
    },
  }),
);

export default ({label, style, className, active, children}: any) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  return (
    <>
      <span className={clsx(classes.btn, {[classes.checked]: active}, className)} style={style} onClick={handleClick}>{label}</span>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </Popover>
    </>
    
  )
}
