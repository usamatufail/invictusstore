import React, { useState, useEffect } from "react";
import clsx from 'clsx';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import IconButton from '@material-ui/core/IconButton';
// core components
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';



//redux
import { connect } from 'react-redux';
import { setAlert } from '../../../redux/Actions/alert';
import { register, adminRegister, getUsers } from '../../../redux/Actions/auth';
// import { adminRegister } from '../../../redux/Actions/auth';

const roles = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'editor',
    label: 'Editor',
  },
];
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// const useStyles = makeStyles(styles);

const AddUser = ({ setAlert, register, isAuthenticated, adminRegister, getUsers, users }) => {
  const classes = useStyles();
  useEffect(() => {
    getUsers()
}, [getUsers])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    showPassword: false,
  });

  const { name, email, password, role, showPassword } = formData;
  
  const handleChange = prop => event => {
    setFormData({ ...formData, [prop]: event.target.value });
    console.log(formData);
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  
  const onSubmit = e => {
    e.preventDefault();
    if(role === "admin"){
      adminRegister({ name, email, password, role })
      console.log('admin')
    }else{

      register({ name, email, password, role });
      console.log('user');
    }
    console.log('yesss')
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
    <div className={classes.paper}>
    <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit = {e => onSubmit(e)}>
        <Grid container spacing={2}>
        <Grid item xs={12} >
<TextField
        id="outlined-simple-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Name"
        value = { name }
        type = "text"
        onChange =  {handleChange('name')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Name</InputAdornment>,
        }}
      />
      </Grid>
      <Grid item xs={12} >
      <TextField
        id="outlined-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Email"
        value={email}
        type = "email"
        name = "email"
        onChange={handleChange('email')}
        InputProps={{
          startAdornment: <InputAdornment position="start">Email</InputAdornment>,
        }}
      />
      </Grid>
      <Grid item xs={12} >
      <TextField
      select
      className={clsx(classes.margin, classes.textField)}
      variant="outlined"
      label="Set Role"
      value={role}
      onChange={handleChange('role')}
      InputProps={{
        startAdornment: <InputAdornment position="start">Role</InputAdornment>,
      }}
    >
      {roles.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
    </Grid>
    <Grid item xs={12} >
      <TextField
        id="outlined-adornment-password"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        value={formData.password}
        onChange={handleChange('password')}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {formData.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      </Grid>
      <Grid item xs={12} >
      <Button 
       type="submit"
       fullWidth
       variant="contained"
       color="primary"
       className={classes.submit}
      >
        Sig Up
      </Button>
      </Grid>
      </Grid>
      </form>
    </div>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
  users: state.auth.users
})

export default connect( mapStateToProps, { setAlert, register, adminRegister, getUsers })(AddUser);


// 03014564471