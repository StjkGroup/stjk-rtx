import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const modes = [{
  value: 'left',
  text: "居左"
},{
  value: 'center',
  text: "居中"
},{
  value: 'right',
  text: "居右"
}];

// const useStyles = makeStyles({
 
// });

export interface Props {
  open: boolean;
  onClose: (value?: string) => void;
}

const BlockRenderImageStyle = ({open, onClose}: Props) => {
  // const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>对齐方式</DialogTitle>
      <List>
        {modes.map((mode) => (
          <ListItem style={{textAlign: "center"}} button onClick={() => handleListItemClick(mode.value)} key={mode.value}>
            <ListItemText primary={mode.text} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default BlockRenderImageStyle;
