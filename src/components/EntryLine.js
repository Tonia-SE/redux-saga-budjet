import React, { Fragment } from 'react';
import { Grid,
          Icon,
          Segment } from 'semantic-ui-react';

function EntryLine(props) {

  const {
    id,
    description,
    value,
    isExpensive = false,
    deleteEntry,
    editEntry,
  } = props;

  return (
    <Fragment>
      <Segment color={isExpensive? 'red': 'green'}>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column textAlign='left' width={10}>{description}</Grid.Column>
              <Grid.Column textAlign='right' width={3}>{value}</Grid.Column>
              <Grid.Column textAlign='right' width={3}>
                <Icon 
                  name='edit'
                  onClick={() => editEntry(id)}
                />
                <Icon 
                  name='trash' 
                  boarded='true' 
                  onClick={() => deleteEntry(id)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Fragment>
  )
}

export default EntryLine;
