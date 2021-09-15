const entriesReducer = (state = initialEntries, action) => {
  console.log(action);
  let newEntries;
  switch (action.type) {
    case 'ADD_ENTRY':
      newEntries = [ ...state, action.payload ];
      return newEntries;
    case 'REMOVE_ENTRY':
      newEntries = state.filter((entry) => entry.id !== action.payload.id)
      return newEntries;
    case 'UPDATE_ENTRY':
      newEntries = [ ...state ];
      const index = newEntries.findIndex((entry) => {
        return entry.id === action.payload.id
      });
      if (index !== -1) {
        newEntries[index] = { ...action.payload.entry };
      } 
      return newEntries;
    default:
      return state;  
  }
}

export default entriesReducer;

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
  {
    id: 5,
    description: 'Power bill',
    value: 50,
    isExpensive: true,
  },
  {
    id: 6,
    description: 'Power bill',
    value: 50,
    isExpensive: true,
  },
];
