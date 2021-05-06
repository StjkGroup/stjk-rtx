/**
 * Create by fay on 2018-10-17 17:32
 */
import React from 'react';
import Button from "../../Button";
import inlineTypes from './types';
import {RichUtils} from "draft-js";
import customStyleMap from './customStyleMap';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    btn: {
      // backgroundColor: theme.palette.common.white
      // cursor: 'pointer',
      // padding: '5px 15px 5px 15px',
      // border: 'none',
      // backgroundColor: '#FFFFFF',
      minWidth: '30px',
      height: '30px',
      '&:hover': {
        border: '1px solid #dddddd',
        // box-shadow: @box-shadow-base;
        margin: 0
      }
    },
  }),
);

const BgImageEdit = ({editorState, onChange, hidePopover}: any) => {
  const classes = useStyles();

  const handleChangeInlineStyle = (inlineStyle: any) => {
    // const selection = editorState.getSelection();
    let nextEditorState;
    const currentStyle = editorState.getCurrentInlineStyle();
    // if (selection.isCollapsed()) {
        nextEditorState = Object.keys(customStyleMap).reduce((state, style) => {
            if(currentStyle.has(style))
            return RichUtils.toggleInlineStyle(state, style);
            return state;
        }, editorState);
    // }
    nextEditorState = RichUtils.toggleInlineStyle(
        nextEditorState,
        inlineStyle
    );
    onChange(nextEditorState);
    hidePopover();
  };

  const currentInlineType = editorState.getCurrentInlineStyle();

  return (
    <>
      {
        inlineTypes.map((inlineType: any, i: number) => {
          const {style, type, children} = inlineType;
          return [
            <Button
              onChange={() => handleChangeInlineStyle('backgroundColor-'+type)}
              active={currentInlineType.has(type)}
              className={classes.btn}
              key={type}
              style={{...style, backgroundColor: customStyleMap['backgroundColor-'+type].backgroundColor}}
            >
              {children}
            </Button>,
            i%10===9&&<br/>
          ]
        })
      }
    </>
  )
}

export default BgImageEdit;
