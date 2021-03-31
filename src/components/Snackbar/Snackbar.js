import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import React from "react";

function Alert(props) {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
}

const MySnackbar = ({ openSnackbar, handleCloseSnackbar }) => {
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
    >
      <Alert onClose={handleCloseSnackbar} severity="success">
        "Success!"
      </Alert>
    </Snackbar>
  );
};

export default MySnackbar;
