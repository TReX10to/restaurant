import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import './App.css';
import View from './pages/View';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/view/:id" element={<View></View>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
