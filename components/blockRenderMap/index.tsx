/**
 * Create by fay on 2018-10-26 00:39
 */
import Immutable from 'immutable';
import {DefaultDraftBlockRenderMap} from 'draft-js';

const blockRenderMap = Immutable.Map({
    'img': {
      element: 'img',
      editable: false,
      props: {
        foo: 'bar',
      },
  },
});


const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

export default extendedBlockRenderMap;