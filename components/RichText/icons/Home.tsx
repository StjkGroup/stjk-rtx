import React from 'react';
import SvgIcon,{SvgIconProps} from '@material-ui/core/SvgIcon';

const Home = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox={'0 0 1024 1024'}>
      <path
      d="M757.40027 240.010322L511.954959-0.030028 266.509648 240.010322 6.621078 494.163627v529.806345h367.237112V773.209782H220.897777l149.717436-146.414403 141.399801-138.126797 141.3998 138.126797 149.717436 146.414403h-152.960413v250.76019h367.237113V494.163627z"/>
      <path d="M730.945986 82.005278h158.485484v331.894669h-158.485484z"/>
   </SvgIcon>
  )
}

export default Home;
