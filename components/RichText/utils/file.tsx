import {
  EditorState,
  AtomicBlockUtils
} from 'draft-js';

const upload = async (file: Blob) => {
  const formData = new FormData();
  formData.append('file', file);
  try {
    const ossRes = await fetch('/oss', {method: 'POST', body: formData});
    const ossResJson = await ossRes.json();
    if(ossResJson.success){
      return ossResJson.result;
    }else{
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const insertImages = async (editorState: EditorState, files: Blob[]) => {
  const maxSize = 2*1024*1024;
  let _entityKey = '';
  for(let i = 0; i < files.length; i++){
    const size = files[i].size;
    if(size > maxSize){
      return {success: false, msg: '图片不得超过2M'};
    }
    const uploadRes = await upload(files[i]);
    if(uploadRes){
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity('image', 'IMMUTABLE', {src: uploadRes, style: {textAlign: 'center'}});
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      _entityKey = entityKey;
      const newEditorState = EditorState.set(
        editorState,
        {currentContent: contentStateWithEntity}
      );
      editorState = AtomicBlockUtils.insertAtomicBlock(newEditorState, _entityKey, ' ');
    }else{
      return {success: false, msg: '上传图片失败'};
    }
  } 
  return {success: true, editorState};
}
