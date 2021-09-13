import { Container } from 'semantic-ui-react';
import DisplayBallance from './components/DisplayBallance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import './App.css';

function App() {
  return (
    <Container>
      <MainHeader title={'Redux+saga'}/>
      <DisplayBallance 
        size={'small'} 
        title={'Your balance:'}
        value={'2,550.53'}
      />
      <DisplayBalances/>
      <MainHeader title={'History'} type={'h3'}/>
      <EntryLine
        description={'Somerthing'}
        sum={'$10,00'}
        isExpensive={true}
      />
      <EntryLine
        description={'Somerthing else'}
        sum={'$100,00'}
        isExpensive={false}
      />
      <EntryLine
        description={'Somerthing else'}
        sum={'$20,00'}
        isExpensive={true}
      />
      <MainHeader title={'Add new transaction'} type={'h3'}/>
      <NewEntryForm/>    
    </Container>
  );
}

export default App;
