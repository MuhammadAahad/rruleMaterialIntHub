import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';

import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import numericalFieldHandler from '../../../utils/numericalFieldHandler';
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
  },
  radio: {
    '&$checked': {
       color: '#F0B032'
    }
 },
 checked: {}
  
  
}));
const RepeatMonthlyOn = ({
  id,
  mode,
  on,
  hasMoreModes,
  handleChange,
  translations
}) => {
  const isActive = mode === 'on';
  const classes = useStyles();
  return (
    <Grid item  direction={'row'} justify={'space-between'}  xl={6} md={6} sm={6} xs={6} lg={6} >
       <Typography className={classes.inputLabel} >
       {translateLabel(translations, 'repeat.monthly.on_day')}
      </Typography>
       <div className={`form-group row d-flex align-items-sm-center ${!isActive && 'opacity-50'}`} style={{display:"flex"}}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          <Radio
            id={id}
            type="radio"
            name="repeat.monthly.mode"
            aria-label="Repeat monthly on"
            value="on"
            checked={isActive}
            classes={{root: classes.radio, checked: classes.checked}}
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
          id={`${id}-day`}
          name="repeat.monthly.on.day"
          aria-label="Repeat monthly on a day"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {[...new Array(31)].map((day, i) => <MenuItem key={i} value={i + 1}>{i + 1}</MenuItem>)}
        </Select>
      </div>
    </div>
    </Grid>
   
  );
};
RepeatMonthlyOn.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['on', 'on the']).isRequired,
  on: PropTypes.shape({
    day: PropTypes.number.isRequired,
  }).isRequired,
  hasMoreModes: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default RepeatMonthlyOn;
