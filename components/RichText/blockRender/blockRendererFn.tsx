/**
 * Create by fay on 2018-10-17 18:25
 */
import { ContentBlock } from 'draft-js';
import Media from './components/Media';

const blockRendererFn = (contentBlock: ContentBlock) => {
  const type = contentBlock.getType();
  console.log(type);
  if (type === 'atomic') {
    // const imgData = sessionStorage.getItem("FAY_RTX_IMGS");
    // let imgSrcs = ["https://www.keypool.com/pc/static/home/why/1.png"];
    // if(imgData){
    //   imgSrcs = JSON.parse(imgData);
    // }
    return {
      component: Media,
      editable: false,
    };
  }
  return null;
};

export default blockRendererFn;
