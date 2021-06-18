/**
 * Create by fay on 2018-10-17 17:32
 */
import React from 'react';
import inlineTypes from './types';
import customStyleMap from './customStyleMap';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {toggleInlineStyle} from '../utils';

const useStyles = makeStyles((_theme: Theme) =>
  createStyles({
    btn: {
      minWidth: '10px',
      height: '20px',
      padding: 4,
      borderWidth: '1px',
      borderStyle: 'solid',
      '&:hover': {
        border: '1px solid #000000 !important',
      }
    },
  }),
);

const prefix = 'backgroundColor-';

const BgColorButtons = ({editorState, onChange, hidePopover}: any) => {
  const classes = useStyles();

  const handleChangeInlineStyle = (inlineStyle: any) => {
    const nextEditorState = toggleInlineStyle(editorState, inlineTypes, inlineStyle, prefix);
    onChange(nextEditorState);
    hidePopover();
  };

  return (
    <Grid container spacing={1}>
      {
        inlineTypes.map((inlineType: any, i: number) => {
          const {style, type, children} = inlineType;
          return [
            i%10===0&&<Grid key={i+'-'+0} item xs={1}/>,
            <Grid key={i+'-'+1} item xs={1}>
              <Button
                onClick={() => handleChangeInlineStyle(prefix+type)}
                className={classes.btn}
                style={{
                  ...style,
                  backgroundColor: customStyleMap[prefix+type].backgroundColor,
                  borderColor: customStyleMap[prefix+type].backgroundColor,
                }}
              >
                {children}
              </Button>
            </Grid>,
            i%10===9&&<Grid key={i+'-'+3} item xs={1}/>
          ]
        })
      }
    </Grid>
  )
}

export default BgColorButtons;
