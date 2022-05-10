import './App.css';
import {Routes, Route} from "react-router-dom";
import AddDetail from './Components/Add';
import ShowAllDetails from './Components/ShowAll';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AddDetail/>}/>
        <Route path='showdetails' element={<ShowAllDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;