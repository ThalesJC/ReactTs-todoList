import { useState } from 'react';
import MyContext from './myContext';

const INITIAL_STATE = { nome: 'Xablau', idade: 100 };

function Provider({ children }) {
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <MyContext.Provider value={ state }>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;