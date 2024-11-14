import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes ,Route } from 'react-router-dom';

import Blogs from './components/blogs';
import Contact from './components/Contact';
import Create from './components/create';
function App() {
  return (
    <>
    <div className='bg-dark text-center py-2 shadow-lg'>
        <h1 className='text-white'>Blog Site</h1>
    </div>

    <Routes>
      <Route path='/' element={<Blogs/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/create' element={<Create/>}/>
    </Routes>
      
      
    </>
  );
}

export default App;
