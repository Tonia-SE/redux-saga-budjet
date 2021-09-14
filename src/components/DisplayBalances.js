import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBallance from './DisplayBallance';

function DisplayBalances({ totalIncomes, totalExpenses }) {

  return (
    <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBallance 
                title={'Income:'} 
                value={`${totalIncomes}$`} 
                color={'green'}
              />
            </Grid.Column>

            <Grid.Column>
              <DisplayBallance 
                title={'Expenses:'} 
                value={`${totalExpenses}$`} 
                color={'red'}
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>
  )
}

export default DisplayBalances;
