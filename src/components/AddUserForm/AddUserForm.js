import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { Grid, Button,Paper, Typography, FormControlLabel, Radio, MenuItem, InputLabel, FormControl, FormLabel } from '@material-ui/core';
import { TextField, Select, RadioGroup } from 'formik-material-ui';
import { useDispatch } from 'react-redux';

import { usersActions } from '../../actions/users';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    marginTop: theme.spacing(2),
    width: '100vw',
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      width: '50vw',
    },
  },
  button: {
    background: theme.palette.success.light,
  }
}));

export const UserForm = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const addUser = user => {
    dispatch(usersActions.add(user));
  };

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5" align="center">
        New user:
      </Typography>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          gender: 'Male',
          language: '',
          credit_card: '',
          email:'',
        }}

        validate={values => {
          const errors = {};

          //first_name validation
          if (!values.first_name) {
            errors.first_name = 'Required';
          } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.first_name)) {
            errors.first_name = 'Invalid First name';
          }

          //last_name validation
          if (!values.last_name) {
            errors.last_name = 'Required';
          } else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.last_name)) {
            errors.last_name = 'Invalid Last name';
          }

          //language validation
          if (!values.language) {
            errors.language = 'Required';
          }

          //email validation
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          //credit_card validation
          if (!values.credit_card) {
            errors.credit_card = 'Required';
          //} else if (
           // !/ ^4[0-9]{12}(?:[0-9]{3})?$ /.test(values.credit_card) //Visa
          //  || !/^3[47][0-9]{13}$/.test(values.credit_card) //American Express
          //  || !/^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(values.credit_card) //MasterCard
          //) {
          //  errors.credit_card = 'Invalid credit card number';
          }

          return errors;
        }}

        onSubmit={(values) => {
          const preparedValue = {
            full_name: `${values.first_name} ${values.last_name}`,
            gender: values.gender,
            language: values.language,
            credit_card: values.credit_card,
            email: values.email,
          }
          addUser(preparedValue);
          props.handleClose();
        }}
      >
        {({ submitForm }) => (
          <Form>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item>
                <Field
                  component={TextField}
                  name="first_name"
                  type="text"
                  label="First name"
                  autoFocus
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="last_name"
                  type="text"
                  label="Last name"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <FormLabel component="legend">Gender</FormLabel>
                <Field component={RadioGroup} name="gender">
                  <FormControlLabel
                    value="Male"
                    control={<Radio/>}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio/>}
                    label="Female"
                  />
                </Field>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <InputLabel id="language-label">Language</InputLabel>
                  <Field
                    labelId="language-label"
                    component={Select}
                    name="language"
                    inputProps={{
                      id: 'language',
                    }}
                  >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Ukraine">Ukraine</MenuItem>
                  </Field>
                </FormControl>
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="email"
                  type="email"
                  label="Email"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Field
                  component={TextField}
                  name="credit_card"
                  type="number"
                  label="Credit card number"
                  fullWidth
                />
              </Grid>
              <Grid item container justify="flex-end">
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={submitForm}
                >
                  Add to users
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  )
}
