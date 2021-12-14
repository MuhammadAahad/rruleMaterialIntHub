/* eslint-disable react/jsx-indent */
import React from 'react';
import {Grid, makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import RepeatYearly from './Yearly/index';
import RepeatMonthly from './Monthly/index';
import RepeatWeekly from './Weekly/index';
import RepeatDaily from './Daily/index';
import RepeatHourly from './Hourly/index';
import translateLabel from '../../utils/translateLabel';

const useStyles = makeStyles((theme) => ({
  inputLabel: {
      color: theme.palette.text.secondary,
      width:"auto",
      height:"auto"
  },
  inputContainer: {
      marginLeft:"10px !important",
      marginTop: "10px !important",
      display: "flex",
      alignItems: "center"
  },
  formControl: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
  },
  input: {
      width: "95%",
      height: "50px",
      display: "flex !important",
      color:"#546e7a !important",
      border: "1px solid #F0B032 !important",
      borderRadius: "50px",
      padding: "15px !important",
      background: theme.palette.background.input,
      justifyContent: "center !important",
      '& .MuiInputBase-root ': {
          marginTop: 0
      },
      '& .MuiFormHelperText-root': {
          color: "red"
      }
  },
  textArea: {
      width: "95%",
      height: "150px",
      display: "flex !important",
      color:"#546e7a !important",
      border: "1px solid #F0B032 !important",
      borderRadius: "25px",
      padding: "15px !important",
      resize:"none",
      background: theme.palette.background.input,
      justifyContent: "center !important",
      '& .MuiInputBase-root ': {
          marginTop: 0
      },
      '& .MuiFormHelperText-root': {
          color: "red"
      }
  },
  datepicker: {
      width: "95%",
      minWidth:"150px",
      marginLeft:"15px",
      float:"left",
      color:"#546e7a !important",
      height: "50px",
      display: "flex !important",
      border: "1px solid #F0B032 !important",
      borderRadius: "50px",
      padding: "15px !important",
      background: theme.palette.background.input,
      justifyContent: "center !important",
      '& .MuiInputBase-root ': {
          marginTop: 0
      },
      '& .MuiFormHelperText-root': {
          color: "red"
      }
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
const Repeat = ({
  id,
  repeat: {
    frequency,
    yearly,
    monthly,
    weekly,
    daily,
    hourly,
    options,
  },
  handleChange,
  translations
}) => {
  const classes = useStyles();
  const isOptionAvailable = option => !options.frequency || options.frequency.indexOf(option) !== -1;
  const isOptionSelected = option => frequency === option;

  return (
    <Grid container >
    <Grid item  direction={'row'} justify={'space-between'} xl={6} md={6} sm={6} xs={6} lg={6} class="rruleContainer">
       
        <Typography className={classes.inputLabel} variant={"h5"}>
        {translateLabel(translations, 'repeat.label')}
        </Typography>
          
        <div className="col-sm-6 rruleRepeatSelect">
          <Select 
            MenuProps={{ classes: { list: classes.list },  anchorOrigin: {
              vertical: "bottom",
              horizontal: "left"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left"
            },getContentAnchorEl: null }}
            name="repeat.frequency"
            id={`${id}-frequency`}
            value={frequency}
            onChange={handleChange}
            className={classes.selectList}
          >
            {isOptionAvailable('Yearly') && <MenuItem classes={classes.rruleMenuItem} value="Yearly">{translateLabel(translations, 'repeat.yearly.label')}</MenuItem>}
            {isOptionAvailable('Monthly') && <MenuItem classes={classes.rruleMenuItem} value="Monthly">{translateLabel(translations, 'repeat.monthly.label')}</MenuItem>}
            {isOptionAvailable('Weekly') && <MenuItem classes={classes.rruleMenuItem} value="Weekly">{translateLabel(translations, 'repeat.weekly.label')}</MenuItem>}
            {isOptionAvailable('Daily') && <MenuItem classes={classes.rruleMenuItem} value="Daily">{translateLabel(translations, 'repeat.daily.label')}</MenuItem>}
            {isOptionAvailable('Hourly') && <MenuItem classes={classes.rruleMenuItem} value="Hourly">{translateLabel(translations, 'repeat.hourly.label')}</MenuItem>}
          </Select>
        

   
   
      {
        isOptionSelected('Yearly') &&
        <RepeatYearly
          id={`${id}-yearly`}
          yearly={yearly}
          handleChange={handleChange}
          translations={translations}
        />
      }
      {
        isOptionSelected('Monthly') &&
        <RepeatMonthly
          id={`${id}-monthly`}
          monthly={monthly}
          handleChange={handleChange}
          translations={translations}
        />
      }
      {
        isOptionSelected('Weekly') &&
        <RepeatWeekly
          id={`${id}-weekly`}
          weekly={weekly}
          handleChange={handleChange}
          translations={translations}
        />
      }
      {
        isOptionSelected('Daily') &&
        <RepeatDaily
          id={`${id}-daily`}
          daily={daily}
          handleChange={handleChange}
          translations={translations}
        />
      }
      {
        isOptionSelected('Hourly') &&
        <RepeatHourly
          id={`${id}-hourly`}
          hourly={hourly}
          handleChange={handleChange}
          translations={translations}
        />
      }

    </div>
    </Grid>
    </Grid>
  );
};

Repeat.propTypes = {
  id: PropTypes.string.isRequired,
  repeat: PropTypes.shape({
    frequency: PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly']).isRequired,
    yearly: PropTypes.object.isRequired,
    monthly: PropTypes.object.isRequired,
    weekly: PropTypes.object.isRequired,
    daily: PropTypes.object.isRequired,
    hourly: PropTypes.object.isRequired,
    options: PropTypes.shape({
      frequency: PropTypes.arrayOf(PropTypes.oneOf(['Yearly', 'Monthly', 'Weekly', 'Daily', 'Hourly'])),
      yearly: PropTypes.oneOf(['on', 'on the']),
      monthly: PropTypes.oneOf(['on', 'on the']),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default Repeat;
