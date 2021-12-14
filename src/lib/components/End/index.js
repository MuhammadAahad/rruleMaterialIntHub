import React from 'react';
import PropTypes from 'prop-types';
import {Grid, makeStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography'
import EndAfter from './After';
import EndOnDate from './OnDate';

import translateLabel from '../../utils/translateLabel';
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
const End = ({
  id,
  end: {
    mode,
    after,
    onDate,
    options,
  },
  handleChange,
  translations
}) => {
  const classes = useStyles();
  const isOptionAvailable = option => !options.modes || options.modes.indexOf(option) !== -1;
  const isOptionSelected = option => mode === option;

  return (
    <Grid item  direction={'row'} justify={'space-between'}  xl={6} md={6} sm={6} xs={6} lg={6} class="rruleContainer">
      <div className="px-3">
      <Typography className={classes.inputLabel} >
        {translateLabel(translations, 'end.label')}
        </Typography>
      <div className="form-group row" style={{display:"flex"}}>
        <div className="col-sm-2 text-sm-right">
       
          
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
            name="end.mode"
            className={classes.selectList}
            id={id}
            value={mode}
            onChange={handleChange}
          >
            {isOptionAvailable('Never') && <MenuItem value="Never">{translateLabel(translations, 'end.never')}</MenuItem>}
            {isOptionAvailable('After') && <MenuItem value="After">{translateLabel(translations, 'end.after')}</MenuItem>}
            {isOptionAvailable('On date') && <MenuItem value="On date">{translateLabel(translations, 'end.on_date')}</MenuItem>}
          </Select>
        </div>


      </div>

      {
          isOptionSelected('After') &&
          <EndAfter
            id={`${id}-after`}
            after={after}
            handleChange={handleChange}
            translations={translations}
          />
        }
        {
          isOptionSelected('On date') &&
          <EndOnDate
            id={`${id}-onDate`}
            onDate={onDate}
            handleChange={handleChange}
            translations={translations}
          />
        }
    </div>
    </Grid>
    
  );
};

End.propTypes = {
  id: PropTypes.string.isRequired,
  end: PropTypes.shape({
    mode: PropTypes.string.isRequired,
    after: PropTypes.number.isRequired,
    onDate: PropTypes.object.isRequired,
    options: PropTypes.shape({
      modes: PropTypes.arrayOf(PropTypes.oneOf(['Never', 'After', 'On date'])),
      weekStartsOnSunday: PropTypes.bool,
    }).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  translations: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
};

export default End;
