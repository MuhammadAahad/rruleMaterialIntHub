import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Grid, makeStyles, TextField,Typography } from '@material-ui/core';
import DateTime from 'react-datetime';
import DatePicker from "react-datepicker";
import 'moment/min/locales';
import "react-datepicker/dist/react-datepicker.css";

import { DATE_TIME_FORMAT } from '../../constants/index';
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
  },
  datepicker: {
    minWidth:"150px",
    marginLeft:"15px",
    float:"left",
    color:"#646464 !important",
    display: "flex !important",
    border: "1px solid #F0B032 !important",
    borderRadius: "25px",
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
  
  
}));
const EndOnDate = ({
  id,
  onDate: {
    date,
    options,
  },
  handleChange,
  translations
}) => {
  const CustomCalendar = options.calendarComponent;
  const classes = useStyles();
  const locale = options.weekStartsOnSunday ? 'en-ca' : 'en-gb';
  const calendarAttributes = {
    'aria-label': translateLabel(translations, 'end.tooltip'),
    value: date,
    dateFormat: DATE_TIME_FORMAT,
    locale,
    readOnly: true,
  };

  return (
    
    <div className="col-6 col-sm-3">
      <Typography className={classes.inputLabel} >
      End Date
    </Typography> 
      {
        
           <DatePicker
           className={classes.datepicker}
            onChange={(inputDate) => {
              const editedEvent = {
                target: {
                  value: moment(inputDate).format(DATE_TIME_FORMAT),
                  name: 'end.onDate.date',
                },
              };

              handleChange(editedEvent);
            }}
          />
      }
    </div>
  );
};

EndOnDate.propTypes = {
  id: PropTypes.string.isRequired,
  onDate: PropTypes.shape({
    date: PropTypes.string.isRequired,
    options: PropTypes.shape({
      weekStartsOnSunday: PropTypes.bool,
      calendarComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default EndOnDate;
