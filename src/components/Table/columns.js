import { UserForm } from "../../components/UserForm/UserForm";
import Modal from "../../components/UserModal/UserModal";
import { DeleteCell } from "../DeleteCell/DeleteCell";

export const COLUMNS = [
  {
    Header: "Edit user",
    id: "edit",
    Cell: ({ handleOpenSnackbar, row }) => {
      return (
        <Modal type="edit-user">
          {({ handleClose, type }) => (
            <UserForm
              handleClose={handleClose}
              type={type}
              currentUserID={row.original.id}
              handleOpenSnackbar={handleOpenSnackbar}
            />
          )}
        </Modal>
      );
    },
  },
  {
    Header: "Full Name",
    accessor: "full_name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Language",
    accessor: "language",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Credit card",
    accessor: "credit_card",
  },
  {
    Header: "Delete user",
    id: "delete",
    Cell: ({ handleShowUndoButton, row: { original } }) => {
      return (
        <DeleteCell
          userID={original.id}
          handleShowUndoButton={handleShowUndoButton}
        />
      );
    },
  },
];
