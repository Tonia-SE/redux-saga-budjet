import { Statistic } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Header, Container } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>

      <Header as="h1">
        Redux+saga
      </Header>

      <Statistic size="small">
        <Statistic.Label>
          Your balance:
        </Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>
      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign: "left"}}>
                  Income:
                </Statistic.Label>
                <Statistic.Value>
                  1,045.50
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign: "left"}}>
                  Expenses:
                </Statistic.Label>
                <Statistic.Value>
                  623.50
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>Somerthing</Grid.Column>
            <Grid.Column textAlign='right' width={3}>$10,00</Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              <Icon name='edit'/>
              <Icon name='trash' boarded='true'/>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>Somerthing else</Grid.Column>
            <Grid.Column textAlign='right' width={3}>$100,00</Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              <Icon name='edit'/>
              <Icon name='trash' boarded='true'/>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>Somerthing else</Grid.Column>
            <Grid.Column textAlign='right' width={3}>$20,00</Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              <Icon name='edit'/>
              <Icon name='trash' boarded='true'/>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add new transaction</Header>
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
        <Button.Group style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>OK</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
