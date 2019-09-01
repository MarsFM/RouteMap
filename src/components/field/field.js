import React from 'react';

import TextField from '@material-ui/core/TextField';

import styles from './field.module.css';

import { withStyles } from '@material-ui/core/styles';

const stylesUI = { 
  textField: {
    '& fieldset': {
      borderColor: '#ffffff',
    },
    '& input': {
      color: '#ffffff',
      fontSize: '12px',
    },
    '& label' : {
      color: '#ffffff',
      fontSize: '12px',
    },
    '& label.Mui-focused': {
      color: '#ffffff',
    },
  }
}

const Field = (props) => {
  const {classes} = props;

  return (
    <div className={styles.field}>
      <TextField
        onChange={props.changePlace}
        onKeyDown={props.addPoint}
        value={props.place}
        label="Введите место"
        className={`${classes.textField} ${styles.field__input}`}
        margin="dense"
        variant="outlined"
        rowsMax="4"
      />
    </div>
  )
}

export default withStyles(stylesUI)(Field);