import {RichUtils} from "draft-js";

export const toggleInlineStyle = (editorState: any, inlineTypes: any, inlineStyle: any, prefix?: string) => {
  let nextEditorState = editorState;
  const currentStyle = editorState.getCurrentInlineStyle();
  console.log(currentStyle.has(inlineStyle));
  if(currentStyle.has(inlineStyle)){
    return editorState;
  }
  inlineTypes.map((item: any) => {
    let {type} = item;
    type = (prefix || '')+type;
    console.log(type, currentStyle.has(type));
    if(currentStyle.has(type)){
      console.log(type, currentStyle.has(type));
      nextEditorState = RichUtils.toggleInlineStyle(nextEditorState, type);
    }
  });
  nextEditorState = RichUtils.toggleInlineStyle(
    nextEditorState,
    inlineStyle
  );
  return nextEditorState;
};