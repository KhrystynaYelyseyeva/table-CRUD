import { UserForm } from "../../components/UserForm/UserForm";
import Modal from '../../components/UserModal/UserModal';
import { DeleteCell } from '../DeleteCell/DeleteCell';

export const COLUMNS = [
  {
    Header: 'Edit user',
    accessor: 'userID',
      Cell: ({ cell }) => {
        return (
          <Modal type="edit-user">
            {({ handleClose, type }) => (
              <UserForm handleClose={handleClose} type={type} currentUserID={cell.value}/>
            )}
          </Modal>
        )
      }
  },
  {
    Header: 'Full Name',
    accessor: 'full_name',
  },
  {
    Header: 'Gender',
    accessor: 'gender',
  },
  {
    Header: 'Language',
    accessor: 'language',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Credit card',
    accessor: 'credit_card',
  },
  {
    Header: 'Delete user',
    accessor: 'id',
    Cell: ({ cell }) => {
      return <DeleteCell userID={cell.value}/>
    }
  }
]
