import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Controller} from 'react-hook-form'

export default function MyTextField(props) {
  const {label, placeholder, name, control, width} = props
  return (

      <Controller
      name = {name}
      control = {control}
      render = {({
        field:{onChange, value},
        fieldState:{error},
        formState,

      }) => (
        <TextField 
        sx={{width:{width}}}
        id="standard-basic" 
        onChange={onChange}
        value={value}
        label={label} 
        variant="standard" 
        placeholder= {placeholder}
        />
      )
    }
      
        />
  );
}
