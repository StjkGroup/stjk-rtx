import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {EditorState} from "draft-js";
import RedoIcon from '@material-ui/icons/Redo';
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '../ToggleButtonGroup';

const useStyles = makeStyles(() =>
  createStyles({
    revokeIcon: {
      transform: 'rotateY(180deg)'
    },
  }),
);

const StorageButtons = ({editorState, onChange}: any) => {

  const classes = useStyles();

  const handleRevoke = () => {
    const nextEditorState = EditorState.undo(editorState);
    onChange(nextEditorState);
  };

  const handleRedo = () => {
    const nextEditorState = EditorState.redo(editorState);
    onChange(nextEditorState);
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={[]}
    >
      <ToggleButton
        title={'撤销'}
        value={'revoke'}
        onClick={handleRevoke}
        disabled={editorState.getUndoStack().size===0}
      >
        <RedoIcon className={classes.revokeIcon}/>
      </ToggleButton>
      <ToggleButton
        title={'重做'}
        value={'redo'}
        onClick={handleRedo}
        disabled={editorState.getRedoStack().size===0}
      >
        <RedoIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default StorageButtons;
