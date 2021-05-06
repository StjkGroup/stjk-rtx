/**
 * Create by fay on 2018-10-18 11:30
 */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import  {Editor, EditorState, convertFromRaw} from 'draft-js';
import {customStyleMap as customStyleMap} from './inlineStyle';
import {customStyleMap as fontSizeCustomStyleMap} from './inlineStyle/fontSize';
import {customStyleMap as colorCustomStyleMap} from './inlineStyle/color';
import {customStyleMap as backgroundColorCustomStyleMap} from './inlineStyle/backgroundColor';
import {styleFn as blockStyleFn} from './blockStyle';
import {blockRendererFn} from './blockRender';
import extendedBlockRenderMap from './blockRenderMap';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      // border: '1px solid #999999',
      // borderRadius: '10px',
    },
    editor: {
      width: '100%',
      height: '100%',
      padding: '15px',
      color: '#000000',
      lineHeight: '30px',
      "& .fay-rte-text-align-right": {
        textAlign: 'right'
      },
      "& .fay-rte-text-align-center": {
        textAlign: 'center'
      },
      "& .fay-rte-text-align-left": {
        textAlign: 'left'
      },
      "& .fay-rte-blockquote": {
        display: 'block',
        borderLeft: '5px solid #d2d2d2',
        color: '#666',
        margin: 0,
        padding: '5px 20px',
        fontSize: '15px',
        fontStyle: 'italic',
        backgroundColor: '#eff9ff'
      },
      "& .fay-rte-lineHeight1em": {
        lineHeight: '1em',
      },
      "& .fay-rte-lineHeight1d5em": {
        lineHeight: '1.5em',
      },
      "& .fay-rte-lineHeight2em": {
        lineHeight: '2em',
      },
      "& .fay-rte-lineHeight2d5em": {
        lineHeight: '2.5em',
      },
      "& .fay-rte-lineHeight3em": {
        lineHeight: '3em',
      },
      "& .fay-rte-lineHeight3d5em": {
        lineHeight: '3.5em',
      },
      "& .fay-rte-lineHeight4em": {
        lineHeight: '4em',
      },
    },
  }),
);

export default ({value}: any) => {
  const classes = useStyles();
  const [editorState, setEditorState] = React.useState(EditorState.createWithContent(emptyContentState));

  React.useEffect(() => {
    if(value){
      setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(value))));
    }
  }, [value]);

  return (
    <div className={classes.root}>
      <div className={classes.editor}>
        <Editor readOnly editorKey="fayRte" editorState={editorState}
          customStyleMap={{...customStyleMap, ...fontSizeCustomStyleMap, ...colorCustomStyleMap, ...backgroundColorCustomStyleMap}}
          blockStyleFn={blockStyleFn}
          blockRenderMap={extendedBlockRenderMap}
          blockRendererFn={blockRendererFn}
          onChange={() => {}}
        />
      </div>
    </div>
  )
}

const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '',
      key: 'foo',
      type: 'unstyled',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },
  ],
});
