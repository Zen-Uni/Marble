/**
 * @description the main components of app
 * @author Uni
 */

import React, { createContext } from 'react';

// import router
import RouterConfig from './RouterConfig'

// import hooks
import {
  useProvideAuth,
} from './hooks'

export const AuthContext = createContext()

function App() {
  
  const auth = useProvideAuth()
  return (
    <AuthContext.Provider value={auth}>
      <RouterConfig/>
    </AuthContext.Provider>
  )
}


export default App;