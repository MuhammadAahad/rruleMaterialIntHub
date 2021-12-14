import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import RepeatMonthlyOn from './On';
import RepeatMonthlyOnThe from './OnThe';
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
const RepeatMonthly = ({
  id,
  monthly: {
    mode,
    interval,
    on,
    onThe,
    options,
  },
  handleChange,
  translations
}) => {
  const isTheOnlyOneMode = option => options.modes === option;
  const isOptionAvailable = option => !options.modes || isTheOnlyOneMode(option);
  const classes = useStyles();
  return (
    <div>
    <Grid item  direction={'row'} justify={'space-between'}  xl={6} md={6} sm={6} xs={6} lg={6} class="rruleContainer">
      
    <Typography className={classes.inputLabel} >
    {translateLabel(translations, 'repeat.monthly.every')} {translateLabel(translations, 'repeat.monthly.months')}
      </Typography>
    <div className="form-group row d-flex align-items-sm-center" style={{display:"flex"}}>
   
          
        
        <div className="col-sm-3">
          <TextField
            id={`${id}-interval`}
            name="repeat.monthly.interval"
            aria-label="Repeat monthly interval"
            value={interval}
            onChange={numericalFieldHandler(handleChange)}
            className={classes.input}
          />
        </div>
        
      </div>

      {isOptionAvailable('on') && (
        <RepeatMonthlyOn
          id={`${id}-on`}
          mode={mode}
          on={on}
          hasMoreModes={!isTheOnlyOneMode('on')}
          handleChange={handleChange}
          translations={translations}
        />
      )}
      {isOptionAvailable('on the') && (
        <RepeatMonthlyOnThe
          id={`${id}-onThe`}
          mode={mode}
          onThe={onThe}
          hasMoreModes={!isTheOnlyOneMode('on the')}
          handleChange={handleChange}
          translations={translations}
        />
      )}

      
      </Grid>
   
    </div>
  );
};

RepeatMonthly.propTypes = {
  id: PropTypes.string.isRequired,
  monthly: PropTypes.shape({
    mode: PropTypes.oneOf(['on', 'on the']).isRequired,
    interval: PropTypes.number.isRequired,
    on: PropTypes.object.isRequired,
    onThe: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatMonthly;
