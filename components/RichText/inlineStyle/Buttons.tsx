import React from 'react';
import inlineTypes from './types';
import {RichUtils} from "draft-js";
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '../ToggleButtonGroup';

const InlineStyleButtons = ({editorState, onChange}: any) => {

  const handleChangeInlineStyle = (inlineStyle: any) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const currentInlineType = editorState.getCurrentInlineStyle();

  const formats = inlineTypes.filter((item: any) => currentInlineType.has(item.type)).map((item: any) => item.type);

  return (
    <ToggleButtonGroup
      size="small"
      value={formats}
    >
      {
        inlineTypes.map((inlineType) => {
          const {title, type, icon} = inlineType;
          const Icon = icon;
          return (
            <ToggleButton title={title} value={type} key={type} onClick={() => handleChangeInlineStyle(type)}>
              <Icon />
            </ToggleButton>
          );
        })
      }
    </ToggleButtonGroup>
  )
}

export default InlineStyleButtons;
