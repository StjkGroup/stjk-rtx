/**
 * Create by fay on 2018-10-18 11:30
 */
 import React from 'react';
 import { makeStyles, createStyles } from '@material-ui/core/styles';
 import Grid from '@material-ui/core/Grid';
 import Divider from '@material-ui/core/Divider';
 import {Buttons as InlineStyleButtons} from '../inlineStyle';
 import {Button as FontSizeButton} from '../inlineStyle/fontSize';
 import {Button as ColorButton} from '../inlineStyle/color';
 import {Button as BackgroundColorButton} from '../inlineStyle/backgroundColor';
 import {Buttons as BlockStyleButtons} from '../blockStyle';
 import {Buttons as BlockRenderButtons} from '../blockRender';
 import {Button as SaveButton} from '../save';
 import {Buttons as StorageButtons} from '../storage';
 
 const useStyles = makeStyles(() =>
   createStyles({
     root: {
       borderBottom: '1px solid #999999'
     },
   }),
 );
 
 const Operation = React.forwardRef(({onSave, editorState, onFocus, onChange}: any, ref: any) => {
   const classes = useStyles();
   
   return (
    <Grid container alignItems="center" className={classes.root} ref={ref} spacing={1}>
      <Grid item>
        <StorageButtons onChange={onChange} editorState={editorState}/>
      </Grid>
      <Grid item>
        <Divider orientation="vertical" sx={{ height: '20px' }} />
      </Grid>
      <Grid item>
        <ColorButton onChange={onChange} editorState={editorState}/>
      </Grid>
      <Grid item>
        <BackgroundColorButton onChange={onChange} editorState={editorState}/>
      </Grid>
      <Grid item>
        <FontSizeButton onClick={onFocus} onChange={onChange} editorState={editorState}/>
      </Grid>
      <Grid item>
        <Divider orientation="vertical" sx={{ height: '20px' }} />
      </Grid>
      <Grid item>
        <InlineStyleButtons onChange={onChange} editorState={editorState}/>
      </Grid>
      <Grid item>
        <Divider orientation="vertical" sx={{ height: '20px' }} />
      </Grid>
      <Grid item>
        <BlockStyleButtons onChange={onChange} editorState={editorState}/>
      </Grid>
      <Grid item>
        <Divider orientation="vertical" sx={{ height: '20px' }} />
      </Grid>
      <Grid item>
        <BlockRenderButtons onChange={onChange} editorState={editorState}/>
      </Grid>
      <Grid item>
        <Divider orientation="vertical" sx={{ height: '20px' }} />
      </Grid>
      <Grid item>
        {onSave && <SaveButton onSave={onSave} editorState={editorState}/>}
      </Grid>
    </Grid>
   )
 })
 
 export default Operation;
 