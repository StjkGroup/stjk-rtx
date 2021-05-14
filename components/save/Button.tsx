/**
 * Create by fay on 2018-10-18 14:53
 */
import React from 'react';
// import Button from '../Button';
import {convertToRaw} from 'draft-js';
import SaveIcon from '@material-ui/icons/Save';
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '../ToggleButtonGroup';

const SaveButton = ({onSave, editorState}: any) => {

  const handleSave = () => {
    const raw = convertToRaw(editorState.getCurrentContent());
    onSave(JSON.stringify(raw));
  };

  return (
    <ToggleButtonGroup
      size="small"
      value={[]}
    >
      <ToggleButton
        title={'保存'}
        value={''}
        onClick={handleSave}
      >
        <SaveIcon />
      </ToggleButton>
    </ToggleButtonGroup>
    // <Button
    //   style={{fontFamily: 'cursive', paddingLeft: '15px', paddingRight: '15px'}}>
    //     <SaveIcon fontSize={"small"}/>
    // </Button>
  )
}

export default SaveButton;
