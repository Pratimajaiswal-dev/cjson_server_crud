import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import GetApi from './components/GetApi';
import PostApi from './components/PostApi';
import DeleteApi from './components/DeleteApi';

function App(){

     return(
        <div className="App">
                <Nav/>
                <Routes> 
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/*" element={<Error/>}></Route>
                <Route path="/get" element={<GetApi/>}></Route>
                <Route path="/post" element={<PostApi/>}></Route>
                <Route path="/delete"element={<DeleteApi/>}></Route>
                </Routes>
        </div>
     );
}

 
export default App;