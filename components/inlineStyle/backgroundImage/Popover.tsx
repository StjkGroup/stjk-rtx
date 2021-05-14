/**
 * Create by fay on 2018-10-18 09:41
 */
import React from 'react';
import Popover from '@material-ui/core/Popover';
// import classnames from 'classnames';
import Edit from './Edit';
// import types from '../color/types';
import Button from '../../Button';
import WallpaperIcon from '@material-ui/icons/Wallpaper';

const BgImagePopover = ({editorState, onChange}: any) => {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const currentInlineType = editorState.getCurrentInlineStyle();
  // let activeType = '';
  // types.map((item) => {
  //   let {type} = item;
  //   type = 'backgroundColor-'+type;
  //   if(currentInlineType.has(type)){
  //     activeType = type;
  //   }
  // });

  const open = Boolean(anchorEl);

  return (
    <>
      <Button title='背景图片' onMouseDown={(e: any)=>e.preventDefault()} onClick={handleClick}>
        <WallpaperIcon />
      </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handleClose}
      >
        <Edit hidePopover={handleClose} editorState={editorState} onChange={onChange}/>
      {/* <Tooltip title='颜色' placement='bottom'>
        <button className={classnames('fay-draft-btn', className)}
              onMouseDown={e=>e.preventDefault()}><Icon type='rt-color1' style={activeType?{color: customStyleMap[activeType].color}:{}}/><Icon type='rt-color'/></button>
      </Tooltip> */}
    </Popover>
    </>
    
  )
}

export default BgImagePopover;
