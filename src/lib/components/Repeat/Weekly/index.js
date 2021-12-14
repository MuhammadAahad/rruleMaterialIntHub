import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { toPairs } from 'lodash';
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
const RepeatWeekly = ({
  id,
  weekly: {
    interval,
    days,
    options,
  },
  handleChange,
  translations
}) => {
  const classes = useStyles();
  let daysArray = toPairs(days);
  if (options.weekStartsOnSunday) {
    daysArray = daysArray.slice(-1).concat(daysArray.slice(0, -1));
  }

  return (
    <Grid item  direction={'row'} justify={'space-between'}  xl={6} md={6} sm={6} xs={6} lg={6} class="rruleContainer">
       <div className="px-3">
       <Typography className={classes.inputLabel} >
       {translateLabel(translations, 'repeat.weekly.every')} week(s)
      </Typography>
      <div className="form-group row d-flex align-items-sm-center">
        <div className="col-sm-1 offset-sm-2">
          
        </div>
        <div className="col-sm-3">
          <TextField
            id={`${id}-interval`}
            name="repeat.weekly.interval"
            aria-label="Repeat weekly interval"
            className={classes.input}
            value={interval}
            onChange={numericalFieldHandler(handleChange)}
          />
        </div>
        <div className="col-sm-1">
        
        </div>
      </div>

      <div className="form-group row" style={{marginTop:"12px"}}>
     
        <div className="btn-group btn-group-toggle offset-sm-2">
          {daysArray.map(([dayName, isDayActive]) => (
            <label
              htmlFor={`${id}-${dayName}`}
              key={dayName}
              className={`weekBtn btn-primary ${isDayActive ? 'active' : ''}`}
            >
              <input
                type="checkbox"
                id={`${id}-${dayName}`}
                name={`repeat.weekly.days[${dayName}]`}
                className="form-control"
                checked={isDayActive}
                onChange={(event) => {
                  const editedEvent = {
                    ...event,
                    target: {
                      ...event.target,
                      value: !isDayActive,
                      name: event.target.name,
                    },
                  };

                  handleChange(editedEvent);
                }}
              />
              {translateLabel(translations, `days_short.${dayName.toLowerCase()}`)}
            </label>))
          }
        </div>
      </div>
    </div>
    </Grid>
   
  );
};

RepeatWeekly.propTypes = {
  id: PropTypes.string.isRequired,
  weekly: PropTypes.shape({
    interval: PropTypes.number.isRequired,
    days: PropTypes.shape({
      mon: PropTypes.bool.isRequired,
      tue: PropTypes.bool.isRequired,
      wed: PropTypes.bool.isRequired,
      thu: PropTypes.bool.isRequired,
      fri: PropTypes.bool.isRequired,
      sat: PropTypes.bool.isRequired,
      sun: PropTypes.bool.isRequired,
    }).isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatWeekly;
