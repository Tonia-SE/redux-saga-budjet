import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Grid,
          Icon,
          Segment } from 'semantic-ui-react';
import { removeEntryRedux } from '../actions/entries.actions';
import { openEditModal } from '../actions/modals.actions';

function EntryLine(props) {

  const dispatch = useDispatch();

  const {
    id,
    description,
    value,
    isExpensive = false,
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
                  onClick={() => dispatch(openEditModal(id))}
                />
                <Icon 
                  name='trash' 
                  boarded='true' 
                  onClick={() => dispatch(removeEntryRedux(id))}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Fragment>
  )
}

export default EntryLine;
