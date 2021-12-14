import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles, TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import numericalFieldHandler from '../../utils/numericalFieldHandler';
import translateLabel from '../../utils/translateLabel';
const useStyles = makeStyles((theme) => ({
  inputLabel: {
      color: theme.palette.text.secondary,
      width:"auto",
      height:"auto"
  },
  input: {
    width:"30%",
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
      width: "150px",
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
const EndAfter = ({
  id,
  after,
  handleChange,
  translations
}) => {
  const classes = useStyles();
  return(
    <div className="col-sm-4">
    <div className="col-9 col-sm-6">
    <Typography className={classes.inputLabel} >
      {translateLabel(translations, 'end.executions')}
      </Typography>
        
      </div>
    <div className="form-group m-0 row d-flex align-items-center">
      <div className="col-3 col-sm-6 pl-0">
        <TextField
          id={id}
          name="end.after"
          aria-label="End after"
          className={classes.input}
          value={after}
          onChange={numericalFieldHandler(handleChange)}
        />
      </div>
      
    </div>
  </div>
  )
  
};

EndAfter.propTypes = {
  id: PropTypes.string.isRequired,
  after: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EndAfter;
