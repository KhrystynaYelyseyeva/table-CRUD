import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useTable } from "react-table";
import Snackbar from "../../components/Snackbar/Snackbar";
import { COLUMNS } from "../../components/Table/columns";
import { TableComponent as Table } from "../../components/Table/Table";
import { UserForm } from "../../components/UserForm/UserForm";
import Modal from "../../components/UserModal/UserModal";
import { getUsers } from "../../reducers";

export const UsersTable = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
      <Modal type="add-user">
        {({ handleClose, type }) => (
          <UserForm
            handleClose={handleClose}
            type={type}
            handleOpenSnackbar={handleOpenSnackbar}
          />
        )}
      </Modal>
      {openSnackbar && (
        <Snackbar
          openSnackbar={openSnackbar}
          handleCloseSnackbar={handleCloseSnackbar}
        />
      )}
      <Table
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        rows={rows}
        prepareRow={prepareRow}
        handleOpenSnackbar={handleOpenSnackbar}
      />
    </>
  );
};
