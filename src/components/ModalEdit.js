import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { closeEditModal } from '../actions/modals.actions';
import useEntryDeteils from '../hooks/useEntryDeteils';
import EntryForm from './EntryForm';

function ModalEdit({ isOpen, id, description, value, isExpensive }) {

  const entryUpdate = useEntryDeteils(description, value, isExpensive);
  const dispatch = useDispatch();

  return (
    <Modal
      open={isOpen}
    >
      <Modal.Header>
        Edit entry
      </Modal.Header>  
      <Modal.Content>
        <Modal.Description>
          <EntryForm
            description={entryUpdate.description} 
            setDescription={entryUpdate.setDescription}
            value={entryUpdate.value}
            setValue={entryUpdate.setValue}
            isExpensive={entryUpdate.isExpensive} 
            setIsExpensive={entryUpdate.setIsExpensive}
          />
        </Modal.Description>
      </Modal.Content> 
      <Modal.Actions>
        <Button
          onClick={() => dispatch(closeEditModal())}
        >
          Close
        </Button>
        <Button
          onClick={() => entryUpdate.updateEntry(id)}
          primary
        >
          OK
        </Button>
      </Modal.Actions>  
    </Modal>
  )
};

export default ModalEdit;
