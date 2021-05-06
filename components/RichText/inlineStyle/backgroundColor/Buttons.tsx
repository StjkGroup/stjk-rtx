/**
 * Create by fay on 2018-10-17 17:32
 */
import React from 'react';
// import Button from "../../button";
import inlineTypes from './types';
import {RichUtils} from "draft-js";
import customStyleMap from './customStyleMap';
import Grid from '@material-ui/core/Grid';
// import './style/index.less';
// import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    btn: {
      // backgroundColor: theme.palette.common.white
      // cursor: 'pointer',
      // padding: '5px 15px 5px 15px',
      // border: 'none',
      // backgroundColor: '#FFFFFF',
      minWidth: '10px',
      height: '20px',
      '&:hover': {
        border: '1px solid #dddddd',
        // box-shadow: @box-shadow-base;
        margin: 0
      }
    },
  }),
);

const BgColorButtons = ({editorState, onChange, hidePopover}: any) => {
  const classes = useStyles();

  const handleChangeInlineStyle = (inlineStyle: any) => {
    // const selection = editorState.getSelection();
    let nextEditorState;
    // const currentStyle = editorState.getCurrentInlineStyle();
    // if (selection.isCollapsed()) {
      // nextEditorState = Object.keys(customStyleMap).reduce((state, style) => {
      //   if(currentStyle.has(style))
      //   return RichUtils.toggleInlineStyle(state, style);
      //   return state;
      // }, editorState);
    // }
    nextEditorState = RichUtils.toggleInlineStyle(
      editorState,
      inlineStyle
    );
    onChange(nextEditorState);
    hidePopover();
  };

  // const currentInlineType = editorState.getCurrentInlineStyle();

  return (
    <Grid container spacing={1}>
      {
        inlineTypes.map((inlineType: any, i: number) => {
          const {style, type, children} = inlineType;
          return [
            i%10===0&&<Grid key={i+'-'+0} item xs={1}/>,
            <Grid key={i+'-'+1} item xs={1}>
              <div
                onClick={() => handleChangeInlineStyle('backgroundColor-'+type)}
                // active={currentInlineType.has(type)}
                className={classes.btn}
                style={{...style, backgroundColor: customStyleMap['backgroundColor-'+type].backgroundColor}}
              >
                {children}
              </div>
            </Grid>,
            i%10===9&&<Grid key={i+'-'+3} item xs={1}/>
          ]
        })
      }
    </Grid>
  )
}

export default BgColorButtons;
