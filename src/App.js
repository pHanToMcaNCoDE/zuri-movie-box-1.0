import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import AsideBar from './Components/AsideBar/AsideBar';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
// import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='home' element={<Home/>}/>
            <Route path='/' element={<Navigate to='home' />} />
            <Route path='details/:id' element={<Details/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
