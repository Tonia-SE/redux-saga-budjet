import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions'; 
import { closeEditModal } from '../actions/modals.actions';

const useEntryDeteils = (desc = '', val = '', isExp = true) => {
  
  const dispatch = useDispatch();
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpensive, setIsExpensive] = useState(isExp);

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpensive(isExp);
    // eslint-disable-next-line
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux( id, {
        id,
        description,
        value,
        isExpensive,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  };

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpensive
      }));
      resetValues();
  }

  function resetValues() {
    setDescription('');
    setValue('');
    setIsExpensive(true);
  };

  return { 
    description, 
    setDescription, 
    value, 
    setValue, 
    isExpensive, 
    setIsExpensive, 
    addEntry,
    updateEntry, 
  };
};

export default useEntryDeteils;