import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';

const Erro =() =>{
  return(
    <>
      <h1>404</h1>
      <h2>NOT FOUND</h2>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout/> }>
          <Route index element={<Home/>}/>
          <Route path='*' element={ <Erro/> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
