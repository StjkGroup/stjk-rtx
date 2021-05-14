/**
 * Create by fay on 2018-10-18 09:41
 */
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import ToggleButton from '@material-ui/core/ToggleButton';
import ToggleButtonGroup from '../../ToggleButtonGroup';
import ImageStyle from './ImageStyle';
import {postJson} from '@stjk/lib/fetch';
import {FILE_GW_URL} from '../../env';
import { CustomPromise } from '@stjk/lib/fetch/request';
const maxSize = 2*1024*1024;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      zIndex: 2,
      height: 200,
      width: 200,
      overflow: 'auto',
      marginTop: '115px',
      padding: theme.spacing(2, 0),
      overflowX: 'hidden'
    },
    input: {
      display: 'none',
    },
  }),
);

const BlockRenderImage = ({onChange}: any) => {
  const classes = useStyles();
  const [openImageStyle, setOpenImageStyle] = React.useState(false);
  const inputRef = React.useRef<any>();
  const requestRef = React.useRef<CustomPromise|null>(null);

  const handleChange = (e: any) => {
    const size = e.target.files[0].size;
    if(size > maxSize){
      alert('图片不得超过2M');
      return;
    }
    setOpenImageStyle(true);
  }

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    inputRef.current.click();
  }

  const handleCloseImageStyle = (value?: string) => {
    if(value){
      // const formData = new FormData();
      // formData.append('file', inputRef.current.files[0]);
      // fetch('/oss', {
      //   method: 'POST',
      //   body: formData,
      // }).then(response => response.json())
      // .catch(error => {
      //   console.error('Error:', error)
      //   inputRef.current.value='';
      // })
      // .then(res => {
      //   inputRef.current.value='';
      //   if(res.success){
      //     onChange(res.result, {textAlign: value});
      //   }else{
      //     console.log('图片上传失败');
      //   }
      // });
      const _file = inputRef.current.files[0];
      inputRef.current.value = '';
      const arr = _file.name.split('.');
      const fileSuffix = arr.length > 1 ? '.'+arr[arr.length - 1] : '';
      const formData = new FormData();
      formData.append('file', _file);
      formData.append('fileType', fileSuffix);
      formData.append('bizId', new Date().getTime().toString());
      formData.append('bucketType', 'public');
      requestRef.current && requestRef.current.abort();
      requestRef.current = postJson({path: FILE_GW_URL+'/file/uploadFileReturnKey', data: formData});
      requestRef.current.then(res => {
        if(requestRef.current){
          if(res.success){
            // if(key === 'coverPic'){
            //   const url = `${OSS_URL}/file-gateway/${res.result}`;
            //   const img = new Image();
            //   img.src = url;
            //   img.onload = function(){
            //     onChange({...value, [key]: res.result, coverSize: img.width+':'+img.height});
            //   };
            // }else{
              // onChange({...value, [key]: res.result});
            // }
            onChange(res.result, {textAlign: value});
          }else{
            console.log('图片上传失败');
          }
        }
        requestRef.current = null;
      })
    }
    setOpenImageStyle(false);
  }

  return (
    <div>
      <input ref={inputRef} accept="image/*" className={classes.input} type="file" onChange={handleChange}/>
      <ToggleButtonGroup
        size="small"
        value={[]}
      >
        <ToggleButton
          title={'上传图片'}
          value={''}
          onMouseDown={handleMouseDown}
        >
          <CropOriginalIcon />
        </ToggleButton>
      </ToggleButtonGroup>
      {/* <Button
        title={'上传图片'}
        onMouseDown={handleMouseDown}
      >
        <CropOriginalIcon/>
      </Button> */}
      <ImageStyle open={openImageStyle} onClose={handleCloseImageStyle}/>
    </div>
  )
}

export default BlockRenderImage;
