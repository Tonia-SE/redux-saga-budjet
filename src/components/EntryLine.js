import React from 'react';
import { Grid,
          Icon,
          Segment } from 'semantic-ui-react';

function EntryLine(props) {

  const {
    description,
    sum,
    isExpensive
  } = props;

  return (
    <Segment color={isExpensive? 'red': 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>{description}</Grid.Column>
            <Grid.Column textAlign='right' width={3}>{sum}</Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              <Icon name='edit'/>
              <Icon name='trash' boarded='true'/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default EntryLine;
