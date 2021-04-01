import { IconButton } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    margin: theme.spacing(2),
    fontWeight: "bold",
    color: "white",
    borderColor: "white",
  },
}));

const UserModal = ({ children, type }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {type === "add-user" && (
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleOpen}
          aria-label="add-user"
        >
          Add user
        </Button>
      )}
      {type === "edit-user" && (
        <IconButton aria-label="edit-user" onClick={handleOpen}>
          <EditIcon fontSize="small" />
        </IconButton>
      )}
      <Modal open={open} onClose={handleClose}>
        {children({ handleClose, type })}
        {/* {React.cloneElement(props.children, { handleClose: handleClose })} */}
      </Modal>
    </div>
  );
};

export default UserModal;
