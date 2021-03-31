import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useState } from "react";
import Dialog from "../Dialog/Dialog";

export const DeleteCell = ({ userID }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        userID={userID}
      />
      <IconButton aria-label="delete" onClick={handleOpenDialog}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </>
  );
};
