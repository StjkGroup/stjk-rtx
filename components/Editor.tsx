/**
 * Create by fay on 2018-10-18 11:30
 */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  Editor, EditorState,
  convertFromRaw, convertToRaw,
  SelectionState, Modifier, RichUtils
} from 'draft-js';
import {customStyleMap as customStyleMap} from './inlineStyle';
import {customStyleMap as fontSizeCustomStyleMap} from './inlineStyle/fontSize';
import {customStyleMap as colorCustomStyleMap} from './inlineStyle/color';
import {customStyleMap as backgroundColorCustomStyleMap} from './inlineStyle/backgroundColor';
import {styleFn as blockStyleFn} from './blockStyle';
import {blockRendererFn} from './blockRender';
import extendedBlockRenderMap from './blockRenderMap';
import {insertImages} from './utils/file';
import Operation from './Operation';
// import {myKeyBindingFn} from './keyBindings';
// import moveSelectionToEnd from './moveSelectionToEnd';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '100%',
      border: '1px solid #999999',
      borderRadius: theme.shape.borderRadius,
      overflow: 'hidden',
      position: 'relative',
      display: "flex",
      flexFlow: "column",
      // minHeight: "100vh",
    },
    operation: {
      // position: 'fixed',
      // top: 0
    },
    editor: {
      width: '100%',
      minHeight: '200px',
      height: '100%',
      padding: '15px',
      color: '#000000',
      lineHeight: '30px',
      overflow: 'auto',
      // position: 'absolute',
      // bottom: 0,
      // flex: 1,
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
      "& figure": {
        margin: 0
      },
    },
    grid: {
      // height: 38
    }
  }),
);

const RtxEditor = ({onSave, placeholder, defaultValue, onChange}: any) => {
  const classes = useStyles();
  // const initData = EditorState.createWithContent(emptyContentState);
  const [editorState, setEditorState] = React.useState(EditorState.createWithContent(defaultValue ? convertFromRaw(JSON.parse(defaultValue)) : emptyContentState));
  // const [height, setHeight] = React.useState<string|number>(0);
  const editorRef = React.createRef<any>();
  const operateRef = React.createRef<any>();

  const handleFocus = () => {
    editorRef.current.focus();
    // const selectionState = editorState.getSelection();
    // const start2 = selectionState.getStartOffset();
    // const end2 = selectionState.getEndOffset();
    // console.log(start2, end2);
  }
  
  // const handleKeyCommand = (command: DraftEditorCommand, editorState: EditorState) => {
  //   console.log(editorState, command);
  //   const newState = RichUtils.handleKeyCommand(editorState, command);
  //   console.log(newState);
  //   if (newState) {
  //     // if(JSON)
  //     handleChange(newState);
  //     return "handled";
  //   }
  //   return "not-handled";
  // }

  const handleKeyCommand = (command: string, editorState: EditorState) => {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      console.log(newState);
      if (newState) {
        handleChange(newState!);
        console.log('fayeditor-backspace');
        return 'handled';
      }
    return 'not-handled';
  }

  const handlePastedText = (text: string) => {
    if(text){
      const currentContent = editorState.getCurrentContent();
      const currentSelection = editorState.getSelection();
      const newContent = Modifier.replaceText(
        currentContent,
        currentSelection,
        text
      );
      const newEditorState = EditorState.push(editorState, newContent, 'insert-characters');
      handleChange(EditorState.forceSelection(newEditorState, newContent.getSelectionAfter()));
      return "handled";
    }
    return "not-handled";
  }

  const handlePastedFiles = (files: Array<Blob>) => {
    if(files){
      insertImages(editorState, files).then(res => {
        if(res.success){
          handleChange(res.editorState!);
        }else{
          alert(res.msg);
        }
      })
      return "handled";
    }
    return "not-handled";
  }

  const handleDroppedFiles = (_selection: SelectionState, files: Array<Blob>) => {
    return handlePastedFiles(files);
  }

  const handleChange = (_editorState: EditorState) => {
    const raw = convertToRaw(_editorState.getCurrentContent());
    const value = JSON.stringify(raw);
    setEditorState(_editorState);
    onChange && onChange(value);
  };

  React.useEffect(() => {
    handleFocus();
  }, [JSON.stringify(convertToRaw(editorState.getCurrentContent()))]);

  return (
    <div className={classes.root}>
      <Paper elevation={4} className={classes.operation}>
        <Operation
          onSave={onSave}
          editorState={editorState}
          onFocus={handleFocus}
          onChange={handleChange}
          ref={operateRef}
        />
      </Paper>
      <div className={classes.editor} onClick={handleFocus}>
        <Editor placeholder={placeholder} editorKey="fayRte" editorState={editorState}
                customStyleMap={{...customStyleMap, ...fontSizeCustomStyleMap, ...colorCustomStyleMap, ...backgroundColorCustomStyleMap}}
                blockStyleFn={blockStyleFn}
                blockRenderMap={extendedBlockRenderMap}
                blockRendererFn={blockRendererFn}
                handleKeyCommand={handleKeyCommand}
                // keyBindingFn={myKeyBindingFn}
                handlePastedText={handlePastedText}
                handlePastedFiles={handlePastedFiles}
                handleDroppedFiles={handleDroppedFiles}
                onChange={handleChange}
                ref={editorRef}/>
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

export default RtxEditor;
