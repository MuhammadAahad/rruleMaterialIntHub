import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import numericalFieldHandler from '../../../utils/numericalFieldHandler';
import translateLabel from '../../../utils/translateLabel';
const useStyles = makeStyles((theme) => ({
  inputLabel: {
      color: theme.palette.text.secondary,
      width:"auto",
      height:"auto"
  },
  input: {

    display: "flex !important",
    color:"#546e7a !important",
    borderBottom: "1px solid #F0B032 !important",
   
    justifyContent: "center !important",
    '& .MuiInputBase-root ': {
        marginTop: 0
    },
    '& .MuiFormHelperText-root': {
        color: "red"
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#F0B032',
    },
},
  selectList: {
      width: "100%%",
      height: "50px",
      color:"#646464 !important",
      display: "flex !important",
      border: "1px solid #F0B032 !important",
      colod:"#546e7a",
      borderRadius: "50px",
      padding: "15px !important",
      background: theme.palette.background.input,
      justifyContent: "center !important",
      
  },
  list:{
      backgroundColor:"#2B2A2A !important"
  },
  rruleMenuItem:{
    color:"646464 !important"
  }
  
  
}));
const RepeatDaily = ({
  id,
  daily: {
    interval,
  },
  handleChange,
  translations
}) => {
  const classes =useStyles();
  return(
    <Grid item  direction={'row'} justify={'space-between'}  xl={6} md={6} sm={6} xs={6} lg={6} class="rruleContainer">
       <Typography className={classes.inputLabel} >
       {translateLabel(translations, 'repeat.daily.every')} {translateLabel(translations, 'repeat.daily.days')}  
      </Typography>

     <div className="form-group row d-flex align-items-sm-center" style={{display:"flex"}}>
    <div className="col-sm-1 offset-sm-2">
     
    </div>
    <div className="col-sm-2">
      <TextField
        id={`${id}-interval`}
        name="repeat.daily.interval"
        aria-label="Repeat daily interval"
        value={interval}
        onChange={numericalFieldHandler(handleChange)}
        className={classes.input}
      />
    </div>
    
  </div>
  </Grid>
  );
  
  };
RepeatDaily.propTypes = {
  id: PropTypes.string.isRequired,
  daily: PropTypes.shape({
    interval: PropTypes.number.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatDaily;
