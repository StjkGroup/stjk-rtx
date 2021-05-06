import React from 'react';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import inlineTypes from './types';
import {RichUtils} from "draft-js";
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '../../ToggleButtonGroup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      zIndex: 2,
      height: 200,
      overflow: 'auto',
      marginTop: '115px'
    },
    hide: {
      display: 'none'
    },
    itemBtn: {
      padding: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#dddddd'
      }
    },
    itemBtnSelected: {
      color: theme.palette.primary.main
    }
  }),
);

const FontSizeMenu = ({editorState, onChange}: any) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const currentInlineType = editorState.getCurrentInlineStyle();
  let label;
  inlineTypes.map((item) => {
    const {type} = item;
    if(currentInlineType.has(type)) label = type.split('-')[2]+'px';
  });

  const open = Boolean(anchorEl);

  const handleChangeInlineStyle = (inlineStyle: any) => {
    // const selection = editorState.getSelection();
    let nextEditorState;
    // const currentStyle = editorState.getCurrentInlineStyle();
    // nextEditorState = Object.keys(customStyleMap).reduce((state, style) => {
    //   if(currentStyle.has(style))
    //     return RichUtils.toggleInlineStyle(state, style);
    //   return state;
    // }, editorState);
    // }
    nextEditorState = RichUtils.toggleInlineStyle(
      editorState,
      inlineStyle
    );
    onChange(nextEditorState);
    setAnchorEl(null);
  };

  console.log(anchorEl);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <ToggleButtonGroup
        size="small"
        value={label?['fontSize']:[]}
      >
        <ToggleButton
          title={'字体大小'}
          value={'fontSize'}
          onClick={handleClick}
          style={{position: "relative"}}
          onMouseDown={(e: any)=>e.preventDefault()}
        >
          {label || <FormatSizeIcon fontSize={"small"}/>}<ArrowDropDownIcon fontSize={"small"}/>
        </ToggleButton>
        <Paper elevation={2} className={clsx(classes.paper, {[classes.hide]: !open})}>
          {
            inlineTypes.map((inlineType, index) => {
              const {style, type, label} = inlineType;
              return (
                <div 
                  key={index}
                  title={label}
                  className={clsx(classes.itemBtn, {[classes.itemBtnSelected]: currentInlineType.has(type)})}
                  onClick={() => handleChangeInlineStyle(type)}
                  style={style}
                >
                  {label}
                </div>
              );
            })
          }
        </Paper>
      </ToggleButtonGroup>
    </ClickAwayListener>
  )
}

export default FontSizeMenu;
