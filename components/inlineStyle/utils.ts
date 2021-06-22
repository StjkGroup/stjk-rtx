import {EditorState, RichUtils} from "draft-js";

export const toggleInlineStyle = (editorState: EditorState, inlineTypes: any, inlineStyle: any, prefix?: string) => {
  let nextEditorState = editorState;
  const currentStyle = editorState.getCurrentInlineStyle();
  
  inlineTypes.map((item: any) => {
    let {type} = item;
    type = (prefix || '')+type;
    if(currentStyle.has(type) && !currentStyle.has(inlineStyle)){
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, type);
    }
  });
  if(currentStyle.has(inlineStyle)){
    nextEditorState = RichUtils.toggleInlineStyle(
      nextEditorState,
      ' '
    );
  }else{
    nextEditorState = RichUtils.toggleInlineStyle(
      nextEditorState,
      inlineStyle
    );
  }
  
  return nextEditorState;
};