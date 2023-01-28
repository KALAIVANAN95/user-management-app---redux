import React from 'react';
import {Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import User from './Pages/User';

import {createStore,combineReducers} from 'redux'

import {Provider} from 'react-redux'
import userReducer from './store/reducers/user';


const rootReducer = combineReducers ({
  data:userReducer
})

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
   <div>

    
      <Navbar />
    
    
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>    
      </main>
   </div>
   </Provider>
  );
}

export default App;
