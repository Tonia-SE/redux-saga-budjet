import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCansel from './ButtonSaveOrCansel';
import EntryForm from './EntryForm';

function NewEntryForm(props) {

  const {
    description,
    setDescription,
    value,
    setValue,
    isExpensive = false,
    setIsExpensive,
    addEntry,
  } = props;

  return (
    <Form unstackable align='right'>
      <EntryForm
        description={description} 
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpensive={isExpensive} 
        setIsExpensive={setIsExpensive}
      />
      <ButtonSaveOrCansel 
        addEntry={addEntry}
      />
    </Form>
  )
}

export default NewEntryForm;
