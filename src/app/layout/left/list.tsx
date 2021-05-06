import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {useRouter} from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      height: '100%',
      padding: 0
    },
  }),
);

const docBasePath = '/doc';

const nav = [{
  path: docBasePath+'/rtx',
  name: '富文本编辑器'
}]

export default function NestedList() {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = (path: string) => () => {
    router.push(path);
  };

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" disableSticky>
          Components 组件
        </ListSubheader>
      }
      className={classes.root}
    >
      {
        nav.map((item, index) => {
          return (
            <ListItem key={index} button selected={router.pathname === item.path} onClick={handleClick(item.path)}>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        })
      }
    </List>
  );
}
