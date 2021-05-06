/**
 * Create by fay on 2018-10-17 18:54
 */
import React from 'react';
import ImageComponent from './components/Image';
// import DuoIcon from '@material-ui/icons/Duo';
// import AudiotrackIcon from '@material-ui/icons/Audiotrack';

interface Type{
  title: string,
  style: object,
  type: string,
  label: string,
  component?: React.ReactNode
  children?: any
}

const types: Type[] = [
  {
    title: '插入图片',
    style:{},
    type: 'image',
    label: 'img',
    component: ImageComponent
  },
  // {
  //   title: '插入视频',
  //   style:{},
  //   type: 'video',
  //   label: 'image',
  //   icon: DuoIcon
  // },
  // {
  //   title: '插入音频',
  //   style:{},
  //   type: 'audio',
  //   label: 'audio',
  //   icon: AudiotrackIcon
  // },
]

export default types;
