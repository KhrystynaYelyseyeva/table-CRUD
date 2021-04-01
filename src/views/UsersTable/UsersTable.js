import { AppBar, Grid, Toolbar } from "@material-ui/core";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";
import Snackbar from "../../components/Snackbar/Snackbar";
import { COLUMNS } from "../../components/Table/columns";
import { TableComponent as Table } from "../../components/Table/Table";
import { UndoButton } from "../../components/UndoButton/UndoButton";
import { UserForm } from "../../components/UserForm/UserForm";
import Modal from "../../components/UserModal/UserModal";
import { getUsers } from "../../reducers";

export const UsersTable = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [showUndoButton, setShowUndoButton] = useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleShowUndoButton = () => {
    setShowUndoButton(true);
  };

  const handleHiddenUndoButton = () => {
    setShowUndoButton(false);
  };

  const users = useSelector(getUsers);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => users, [users]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <>
      {openSnackbar && (
        <Snackbar
          openSnackbar={openSnackbar}
          handleCloseSnackbar={handleCloseSnackbar}
        />
      )}
      <AppBar position="fixed">
        <Toolbar>
          <Modal type="add-user">
            {({ handleClose, type }) => (
              <UserForm
                handleClose={handleClose}
                type={type}
                handleOpenSnackbar={handleOpenSnackbar}
              />
            )}
          </Modal>
          {showUndoButton && (
            <UndoButton handleHiddenUndoButton={handleHiddenUndoButton} />
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />
      <Grid container>
        <Grid item lg={1} />
        <Grid item lg={10}>
          <Table
            getTableProps={getTableProps}
            getTableBodyProps={getTableBodyProps}
            headerGroups={headerGroups}
            rows={rows}
            prepareRow={prepareRow}
            handleOpenSnackbar={handleOpenSnackbar}
            handleShowUndoButton={handleShowUndoButton}
          />
        </Grid>
        <Grid item lg={1} />
      </Grid>
    </>
  );
};
