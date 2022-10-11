import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import ExecriceDetail from './pages/ExecriceDetail';
import Home from './pages/Home';
import 'swiper/css';


function App() {
  return (
    <div className="App relative">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercice/:id' element={<ExecriceDetail/>} />
      </Routes>

    </div>
  );
}

export default App;
