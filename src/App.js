import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Chat from './components/Chat'
import Login from './components/Login'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import styled from 'styled-components'

function App() {
  return (
    <div className="App">
     

      <Router>
        <Container>
          <Header/>
          <Main>
            <Sidebar/>
              <Switch>
                <Route path="/room">
                  <Chat/>
                </Route>

                <Route path="/">
                  <Login/>
                </Route>

              </Switch>
            </Main>
        </Container>

      </Router>


    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: orange;
  display: grid;
  grid-template-rows: 38px auto; 

`
//first row is 38px, second row which is main is automatically fill up the rest of the page

const Main = styled.div`
  background: blue;
  display: grid;
  grid-template-columns: 260px auto;
`