import './App.css';
import Day from './components/Day';
import DayList from './components/DayList';
import Header from './components/Header';
import CreateWord from './components/CreateWord';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<DayList />} />
            <Route path="/day/:day" element={<Day />} />
            <Route path="/create_word" element={<CreateWord />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
