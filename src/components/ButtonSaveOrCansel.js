import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonSaveOrCansel() {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or/>
      <Button primary>OK</Button>
    </Button.Group>
  )
}

export default ButtonSaveOrCansel;
