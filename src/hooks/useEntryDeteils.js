import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addEntryRedux, updateEntryRedux } from '../actions/entries.actions';
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from '../actions/modals.actions';

function useEntryDetails(desc = '', val = '', isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpensive, setIsExpensive] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpensive(isExp);
  }, [desc, val, isExp]);

  function updateEntry(id) {
    dispatch(
      updateEntryRedux(id, {
        id,
        description,
        value,
        isExpensive,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  }

  function addEntry() {
    dispatch(
      addEntryRedux({
        id: uuidv4(),
        description,
        value,
        isExpensive,
      })
    );
    resetValues();
  }

  function resetValues() {
    setDescription('');
    setValue('');
    setIsExpensive(true);
  }

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
}

export default useEntryDetails;
