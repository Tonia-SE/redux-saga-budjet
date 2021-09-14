import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function ModalEdit(props) {

  const {
    description, 
    setDescription,
    value, 
    setValue,
    isExpensive, 
    setIsExpensive,
    isOpen, 
    setIsOpen,
  } = props

  return (
    <Modal
      open={isOpen}
      setIsOpen={setIsOpen}
    >
      <Modal.Header>
        Edit entry
      </Modal.Header>  
      <Modal.Content>
        <Modal.Description>
          <EntryForm
            isShow={false}
            description={description} 
            setDescription={setDescription}
            value={value}
            setValue={setValue}
            isExpensive={isExpensive} 
            setIsExpensive={setIsExpensive}
          />
        </Modal.Description>
      </Modal.Content> 
      <Modal.Actions>
        <Button
          onClick={() => setIsOpen(!isOpen)}
        >
          Close
        </Button>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          primary
        >
          OK
        </Button>
      </Modal.Actions>  
    </Modal>
  )
};

export default ModalEdit;
