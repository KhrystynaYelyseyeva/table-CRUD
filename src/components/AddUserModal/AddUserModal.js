import React, { useState, memo } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  buttonSpac: {
    display: 'block',
    margin: '5vh auto 5vh',
  },
});

const SimpleModal = memo((props) => {
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
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonSpac}
        onClick={handleOpen}
      >
        Add user
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add user"
      >
        {React.cloneElement(props.children, { handleClose: handleClose })}
      </Modal>
    </div>
  );
})

export default SimpleModal;