import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core'


function App() {
  const [ list, setList ] = useState<Array<any>>()
  const [ user, setUser ] = useState<string | null>(null)
  const [ loggedIn, setUserLoggedIn ] = useState<boolean>(false)

  useEffect(() => {
    setList([])
  },[])

  const login = () => {
    setUserLoggedIn(true)
  }

  const logout = () => {
    setUserLoggedIn(false)
    setUser(null)
  }

  return (
    <div className="App">
      <div className='topbar'>
        { !loggedIn && <span className='loginSpan'><input type='username' onChange={(event) => {setUser(event.target.value)}} placeholder='Name' style={{marginLeft: '5px'}}/> <Button onClick={() => login()}>Login</Button> </span>}
        { loggedIn && <span className='loginSpan'><Button onClick={() => logout()}>Logout</Button></span> }

        <span style={{ flex: '1 1'}}></span>

        { !loggedIn && <span className='welcomeSpan'>Welcome! </span> }
        { loggedIn && <span className='welcomeSpan'>Welcome, { user }!</span> }

        { loggedIn &&
          <div>

          </div>   
        }
      </div>
    </div>
  );
}

export default App;
