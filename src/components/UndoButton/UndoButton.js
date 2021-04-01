import { Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../actions/users";
import { getUserFromHistory } from "../../reducers";

const useStyles = makeStyles((theme) => ({
  progress: {
    marginRight: theme.spacing(2),
    color: "white",
  },
  button: {
    position: "absolute",
    right: theme.spacing(2),
  },
}));

export const UndoButton = ({ handleHiddenUndoButton }) => {
  const classes = useStyles();
  const user = useSelector(getUserFromHistory);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          dispatch(usersActions.clean_history());
          handleHiddenUndoButton();
          return 0;
        } else {
          return prevProgress + 10;
        }
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [dispatch, handleHiddenUndoButton]);

  const unDeleteUser = (user) => {
    dispatch(usersActions.add(user));
    dispatch(usersActions.clean_history());
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={() => {
        unDeleteUser(user);
        handleHiddenUndoButton();
      }}
    >
      <CircularProgress
        className={classes.progress}
        variant="determinate"
        value={progress}
        size={20}
      />
      return user
    </Button>
  );
};
