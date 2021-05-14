/**
 * Create by fay on 2018-10-17 18:25
 */
import blockTypes from "./types";
import { ContentBlock } from 'draft-js';
import {GLOBAL_CLASSNAME_PREFIX} from '../env';

const styleFn = (contentBlock: ContentBlock) => {
  const contentBlockType = contentBlock.getType();
  for(let blockType of blockTypes){
    const {type, editorClassName, children=[]} = blockType
      if(contentBlockType === type){
        return editorClassName ? (GLOBAL_CLASSNAME_PREFIX + editorClassName) : editorClassName;
      }
      for(let child of children){
        if(type === child.type){
          return child.editorClassName ? (GLOBAL_CLASSNAME_PREFIX + child.editorClassName) : child.editorClassName;
        }
      }
  }
};

export default styleFn;
