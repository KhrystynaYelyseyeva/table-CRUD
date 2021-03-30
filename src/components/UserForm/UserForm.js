import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Field, Form, Formik } from "formik";
import { RadioGroup, Select, TextField } from "formik-material-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../actions/users";
import { getUsers } from "../../reducers";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: "auto",
    marginTop: theme.spacing(2),
    width: "100vw",
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      width: "50vw",
    },
  },
  button: {
    background: theme.palette.success.light,
  },
}));

export const UserForm = ({ handleClose, type, currentUserID }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const users = useSelector(getUsers);

  const preparedCurrentUser = {};

  if (currentUserID) {
    const currentUser = users.find((user) => user.id === currentUserID);

    const fullName = currentUser.full_name.split(" ");

    preparedCurrentUser.first_name = fullName[0];
    preparedCurrentUser.last_name = fullName[1];
    preparedCurrentUser.gender = currentUser.gender;
    preparedCurrentUser.language = currentUser.language;
    preparedCurrentUser.credit_card = currentUser.credit_card;
    preparedCurrentUser.email = currentUser.email;
    preparedCurrentUser.id = currentUser.id;
  }

  const currentUserData = currentUserID
    ? preparedCurrentUser
    : {
        first_name: "",
        last_name: "",
        gender: "Male",
        language: "",
        credit_card: "",
        email: "",
      };

  const addUser = (user) => {
    dispatch(usersActions.add(user));
  };

  const editUser = (userID, newData) => {
    dispatch(usersActions.edit(userID, newData));
  };

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h5" align="center">
        {type === "add-user" && "New user:"}
        {type === "edit-user" && "Edit user:"}
      </Typography>
      <Formik
        initialValues={currentUserData}
        validate={(values) => {
          const errors = {};

          //first_name validation
          if (!values.first_name) {
            errors.first_name = "Required";
          } else if (
            !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(
              values.first_name
            )
          ) {
            errors.first_name = "Invalid First name";
          }

          //last_name validation
          if (!values.last_name) {
            errors.last_name = "Required";
          } else if (
            !/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(values.last_name)
          ) {
            errors.last_name = "Invalid Last name";
          }

          //language validation
          if (!values.language) {
            errors.language = "Required";
          }

          //email validation
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          //credit_card validation
          if (!values.credit_card) {
            errors.credit_card = "Required";
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
            id: users.length + 1,
          };

          switch (type) {
            case "add-user":
              addUser(preparedValue);
              break;
            case "edit-user":
              editUser(currentUserID, preparedValue);
              break;
            default:
              return;
          }

          handleClose();
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
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
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
                      id: "language",
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
                  {type === "add-user" && "Add to users"}
                  {type === "edit-user" && "Save"}
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};
