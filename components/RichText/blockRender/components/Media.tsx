import React from 'react';

const styles: any = {
  root: {
    width: '100%'
  },
  media: {
    // width: '100%',
    // Fix an issue with Firefox rendering video controls
    // with 'pre-wrap' white-space
    whiteSpace: 'initial',
    maxWidth: '100%'
  },
};

const AudioComponent = (props: any) => {
  return <audio controls {...props} />;
};

const ImageComponent = (props: any) => {
  return <img {...props} />;
};

const VideoComponent = (props: any) => {
  return <video controls {...props} />;
};

const HtmlComponent = (props: any) => {
  return <div dangerouslySetInnerHTML={{__html: props.src}}/>;
};

const BlockRenderMedia = (props: any) => {
  console.log(props);
  console.log(props.blockProps);
  console.log(props.block.getEntityAt(0));
  console.log(props.block.getEntityAt(1));
  
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  const {src, style} = entity.getData();
  const type = entity.getType();
  // const {foo} = this.props.blockProps;
  const Component: any = {
    audio: AudioComponent,
    image: ImageComponent,
    video: VideoComponent,
    html: HtmlComponent,
  }
  console.log(type);
  const Com = Component[type];
  return (
    <div style={{...styles.root, ...style}}>
      <Com src={src} style={styles.media}/>
    </div>
  )
};

export default BlockRenderMedia;
