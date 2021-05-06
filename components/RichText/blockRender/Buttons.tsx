/**
 * Create by fay on 2018-10-17 17:32
 */
import React from 'react';
import blockTypes from "./types";
import {AtomicBlockUtils, EditorState} from "draft-js";

const BlockRenderButtons = ({editorState, onChange}: any) => {

  const handleChangeBlockStyle = (urlType: string, url?: string, style?: object) => {
    // e.preventDefault();
    // const {editorState, urlValue, urlType} = this.state;
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(urlType, 'IMMUTABLE', {src: url, style});
    // sessionStorage.setItem("FAY_RTX_IMGS", JSON.stringify(["https://www.keypool.com/pc/static/home/why/1.png"]));
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    console.log(entityKey);
    const newEditorState = EditorState.set(
      editorState,
      {currentContent: contentStateWithEntity}
    );
    onChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ')); //此处第三个参数是空格字符串不是空字符串
  };

  // let selection = editorState.getSelection();
  // let blockStyle = editorState
  //     .getCurrentContent()
  //     .getBlockForKey(selection.getStartKey())
  //     .getType();

  return (
    <>
      {
        blockTypes.map((blockType: any) => {
          const {type, component} = blockType;
          const Component = component;
          return (
            <Component
              key={type}
              onChange={
                (url: string, style?: object) => handleChangeBlockStyle('image', url, style)
              }/>
          )
        })
      }
    </>
  )
}

export default BlockRenderButtons;
