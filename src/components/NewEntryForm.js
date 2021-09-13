import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCansel from './ButtonSaveOrCansel';

function NewEntryForm() {
  return (
    <Form unstackable align='right'>
      <Form.Group>
        <Form.Input 
          icon='tags'
          width={12}
          placeholder='new shiny thing'
          label='Description'
        />
        <Form.Input 
          icon='dollar'
          iconPosition='left'
          width={4}
          placeholder='100.00'
          label='Value'
        />
      </Form.Group>
      <ButtonSaveOrCansel/>
    </Form>
  )
}

export default NewEntryForm;
