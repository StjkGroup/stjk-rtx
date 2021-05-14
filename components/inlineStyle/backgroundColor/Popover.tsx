/**
 * Create by fay on 2018-10-18 09:41
 */
import React from 'react';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Buttons from './Buttons';
import types from '../color/types';
import ColorsIcon from "./icons/Colors";
import customStyleMap from './customStyleMap';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '../../ToggleButtonGroup';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      zIndex: 2,
      height: 200,
      width: 200,
      overflow: 'auto',
      marginTop: '115px',
      padding: theme.spacing(2, 0),
      overflowX: 'hidden'
    },
    hide: {
      display: 'none'
    },
  }),
);

const BgColorPopover = ({editorState, onChange}: any) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentInlineType = editorState.getCurrentInlineStyle();
  let activeType = '';
  types.map((item) => {
    let {type} = item;
    type = 'backgroundColor-'+type;
    if(activeType.length === 0 && currentInlineType.has(type)){
      activeType = type;
    }
  });

  const open = Boolean(anchorEl);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <ToggleButtonGroup
        size="small"
        value={activeType?['bg-color']:[]}
      >
        <ToggleButton
          title={'背景颜色'}
          value={'bg-color'}
          onClick={handleClick}
          style={{position: "relative"}}
          onMouseDown={(e: any)=>e.preventDefault()}
        >
          <FormatColorFillIcon fontSize={"small"} style={activeType?{color: customStyleMap[activeType].backgroundColor}:{}}/><ColorsIcon fontSize={"small"}/>
        </ToggleButton>
        <Paper elevation={2} className={clsx(classes.paper, {[classes.hide]: !open})}>
          <Buttons hidePopover={handleClose} editorState={editorState} onChange={onChange}/>
        </Paper>
      </ToggleButtonGroup>
    </ClickAwayListener>
  )
}

export default BgColorPopover;
