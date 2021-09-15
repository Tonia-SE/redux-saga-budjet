import React, { Fragment } from 'react';
import { Checkbox,
          Form,
          Segment } from 'semantic-ui-react';

function EntryForm(props) {

  const {
    description, 
    setDescription,
    value, 
    setValue,
    isExpensive, 
    setIsExpensive
  } = props;

  return (
    <Fragment>
      <Form.Group>
        <Form.Input 
          icon='tags'
          width={12}
          placeholder='new shiny thing'
          label='Description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input 
          icon='dollar'
          iconPosition='left'
          width={4}
          placeholder='100.00'
          label='Value'
          value={value}
          onChange={(event) => {setValue(event.target.value)}}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label='is expense'
          checked={isExpensive}
          onClick={() => setIsExpensive((oldState) => !oldState)}
        >
        </Checkbox>
      </Segment>
    </Fragment>
  )
}

export default EntryForm;
