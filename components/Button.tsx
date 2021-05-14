import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      minWidth: '30px',
      height: '30px',
      '&:hover': {
        borderRadius: '2px',
        backgroundColor: '#dddddd'
      },
    },
    checked: {
      color: theme.palette.common.black,
    },
    disabled: {
      color: '#dddddd',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  }),
);

const RtxButton = ({title, style, className, active, children, disabled, onChange, toolTipProps, ...props}: any) => {
  const classes = useStyles();

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    (!disabled) && onChange && onChange();
  };

  const contentButton = (
    <Button
      className={clsx(classes.btn, {[classes.checked]: active}, {[classes.disabled]: disabled}, className)}
      style={style}
      onMouseDown={handleMouseDown}
      size={"small"}
      {...props}
    >
      {children}
    </Button>
  )
  
  if(title || toolTipProps){
    return (
      <Tooltip placement='bottom' title={title} arrow {...toolTipProps}>
        {contentButton}
      </Tooltip>
    )
  }

  return contentButton;
}

export default RtxButton;
