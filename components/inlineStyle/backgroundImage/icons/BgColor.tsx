import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

const BgColor = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path d="M896 384c-46.72-46.72-160.64-25.6-219.52-10.24L448.64 152.96l-21.76 21.76L313.6 65.28 223.36 152.96 336.64 262.4 66.56 524.16v2.56L448.64 896l359.68-349.44L960 693.12S960 448 896 384zM194.56 524.16l255.36-247.68 254.72 247.68H194.56z" />
    </SvgIcon>
  )
}

export default BgColor;
