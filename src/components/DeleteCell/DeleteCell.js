import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../actions/users';

export const DeleteCell = ({ userID }) => {
  const dispatch = useDispatch();

  const handleDelete = ID => {
    dispatch(usersActions.delete(ID));
  }

  return (
    <IconButton aria-label="delete" onClick={() => handleDelete(userID)}>
      <DeleteIcon fontSize="small"/>
    </IconButton>
  )
}