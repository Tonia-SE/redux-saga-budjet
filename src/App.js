import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import DisplayBallance from './components/DisplayBallance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import './App.css';
import { getAllEntries } from './actions/entries.actions';
// import { testSaga } from './sagas/testSaga';

function App() {

  const entries = useSelector(state => state.entries);
  const { isOpen, id } = useSelector(state => state.modals);
  const dispatch = useDispatch();
  const [entry, setEntry] = useState({});
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id);
    setEntry(entries[index]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, id, entries])

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.forEach((entry) => {
      if (entry.isExpensive) {
        totalExpenses += +entry.value;
      } else {
        totalIncomes += +entry.value;
      }
    });
    setTotalExpenses(totalExpenses);
    setTotalIncomes(totalIncomes);
    setTotal(totalIncomes - totalExpenses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  useEffect(() => {
    dispatch(getAllEntries());
    // dispatch({type: 'TEST_SAGA'});
  }, [dispatch]);

  return (
    <Container>

      <MainHeader title={'Redux+saga'}/>
      <DisplayBallance 
        size={'small'} 
        title={'Your balance:'}
        value={total}
      />

      <DisplayBalances 
        totalIncomes={totalIncomes} 
        totalExpenses={totalExpenses}
      />
      <MainHeader title={'History'} type={'h3'}/>

      <EntryLines 
        entries={entries} 
      />

      <MainHeader title={'Add new transaction'} type={'h3'}/>
      <NewEntryForm />

      <ModalEdit 
        isOpen={isOpen} 
        {...entry}
      />    

    </Container>
  );
}

export default App;
