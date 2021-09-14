import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import DisplayBallance from './components/DisplayBallance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';
import './App.css';

function App() {

  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpensive, setIsExpensive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState(); 
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [total, setTotal] = useState(0);

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpensive(true);
  }

  function deleteEntry(id) {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  function editEntry(id) {
    if(id) {
      const index = entries.findIndex((entry) => {
        return entry.id === id
      });
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpensive(entry.isExpensive);
      setIsOpen(true);
    }
  }

  function addEntry() {
    setEntries([...entries, {
      id: entries.length + 1, 
      description, 
      value,
      isExpensive
    }])
    resetEntry();
  };

  useEffect(() => {
    if(!isOpen && entryId) {
      const newEntries = [ ...entries ]
      newEntries.forEach((entry) => {
        if(entry.id === entryId) {
          entry.description = description;
          entry.value = value;
          entry.isExpensive = isExpensive;
        } 
      })
      setEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

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
  }, [entries])

  return (
    <Container>

      <MainHeader title={'Redux+saga'}/>
      <DisplayBallance 
        size={'small'} 
        title={'Your balance:'}
        value={`${total}$`}
      />

      <DisplayBalances 
        totalIncomes={totalIncomes} 
        totalExpenses={totalExpenses}
      />
      <MainHeader title={'History'} type={'h3'}/>

      <EntryLines 
        entries={entries} 
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />

      <MainHeader title={'Add new transaction'} type={'h3'}/>
      <NewEntryForm 
        addEntry={addEntry} 
        isShow={true}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpensive={isExpensive}
        setIsExpensive={setIsExpensive}
      />

      <ModalEdit 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpensive={isExpensive}
        setIsExpensive={setIsExpensive}
      />    

    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000,
    isExpensive: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20,
    isExpensive: true,
  },
  {
    id: 3,
    description: 'Rent',
    value: 300,
    isExpensive: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: 50,
    isExpensive: true,
  },
];
