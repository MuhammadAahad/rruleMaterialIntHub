import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { MONTHS, DAYS } from '../../../constants/index';
import translateLabel from '../../../utils/translateLabel';
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

  rruleMenuItem:{
    color:"646464 !important"
  },
  radio: {
    '&$checked': {
       color: '#F0B032'
    }
 },
 checked: {}
  
  
}));
const RepeatYearlyOnThe = ({
  id,
  mode,
  onThe,
  hasMoreModes,
  handleChange,
  translations
}) => {
  const isActive = mode === 'on the';
  const classes = useStyles();
  return (
    <Grid item  direction={'row'} justify={'space-between'}  xl={6} md={6} sm={6} xs={6} lg={6} class="rruleContainer">
      <Typography className={classes.inputLabel} >
         On the
        </Typography>
      <div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`} style={{display:"flex"}}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          <Radio
            id={id}
            type="radio"
            aria-label="Repeat yearly on the"
            name="repeat.yearly.mode"
            classes={{root: classes.radio, checked: classes.checked}}
            checked={isActive}
            value="on the"
            onChange={handleChange}
          />
        )}
      </div>


      <div className="col-sm-2">
        <Select
          MenuProps={{ classes: { list: classes.list },  anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },getContentAnchorEl: null }}
            className={classes.selectList}
          id={`${id}-which`}
          name="repeat.yearly.onThe.which"
          aria-label="Repeat yearly on the which"
          value={onThe.which}
          disabled={!isActive}
          onChange={handleChange}
        >
          <MenuItem value="First">{translateLabel(translations, 'numerals.first')}</MenuItem>
          <MenuItem value="Second">{translateLabel(translations, 'numerals.second')}</MenuItem>
          <MenuItem value="Third">{translateLabel(translations, 'numerals.third')}</MenuItem>
          <MenuItem value="Fourth">{translateLabel(translations, 'numerals.fourth')}</MenuItem>
          <MenuItem value="Last">{translateLabel(translations, 'numerals.last')}</MenuItem>
        </Select>
      </div>

      <div className="col-sm-3" style={{marginLeft:"10px"}}>
        <Select
          MenuProps={{ classes: { list: classes.list },  anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },getContentAnchorEl: null }}
            className={classes.selectList}
          id={`${id}-day`}
          name="repeat.yearly.onThe.day"
          aria-label="Repeat yearly on the day"
          value={onThe.day}
          disabled={!isActive}
          onChange={handleChange}
        >
          {DAYS.map(day => <MenuItem key={day} value={day}>{translateLabel(translations, `days.${day.toLowerCase()}`)}</MenuItem>)}
        </Select>
      </div>


      <div className="col-sm-2" style={{marginLeft:"10px"}}>
        <Select
        MenuProps={{ classes: { list: classes.list },  anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },getContentAnchorEl: null }}
          className={classes.selectList}
          id={`${id}-month`}
          name="repeat.yearly.onThe.month"
          aria-label="Repeat yearly on the month"
          value={onThe.month}
          disabled={!isActive}
          onChange={handleChange}
        >
          {MONTHS.map(month => <MenuItem key={month} value={month}>{translateLabel(translations, `months.${month.toLowerCase()}`)}</MenuItem>)}
        </Select>
      </div>

    </div>
    </Grid>
    
  );
};
RepeatYearlyOnThe.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  onThe: PropTypes.shape({
    which: PropTypes.oneOf(['First', 'Second', 'Third', 'Fourth', 'Last']).isRequired,
    month: PropTypes.oneOf(MONTHS).isRequired,
    day: PropTypes.oneOf(DAYS).isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatYearlyOnThe;
