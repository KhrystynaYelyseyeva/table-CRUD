import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import { COLUMNS } from '../../components/Table/columns';
import { TableComponent as Table } from "../../components/Table/Table";
import { UserForm } from "../../components/UserForm/UserForm";
import Modal from '../../components/UserModal/UserModal';
import { getUsers } from '../../reducers';

export const UsersTable = () => {
  const users = useSelector(getUsers);
  
  const preparedUsers = users.map(user => ({
    ...user,
    userID: user.id,
  }));
  
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => preparedUsers, [preparedUsers])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <>
      <Modal type="add-user">
        {({ handleClose, type }) => (
          <UserForm handleClose={handleClose} type={type}/>
        )}
      </Modal>
      <Table
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        rows={rows}
        prepareRow={prepareRow}
      />
    </>
  )
}