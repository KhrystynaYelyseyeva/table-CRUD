import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';
import Modal from '../../components/UserModal/UserModal';

import { TableComponent as Table } from "../../components/Table/Table";

import { COLUMNS } from '../../components/Table/columns';
import { getUsers } from '../../redusers';
import { UserForm } from "../../components/UserForm/UserForm";


export const UsersTable = () => {
  const users = useSelector(getUsers);

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => users, [users])

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
      <Modal>
        {({handleClose}) => <UserForm handleClose={handleClose}/>}
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