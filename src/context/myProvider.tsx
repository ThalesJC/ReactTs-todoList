import { useState } from 'react';
import MyContext from './myContext';
import IContext from '../Interfaces/IContext';
import { INITIAL_STATE } from './myContext';

function Provider({ children }: IContext) {
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <MyContext.Provider value={ INITIAL_STATE }>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;