import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Footer logotext="component" />
      </div>
    </div>
  );
}

export default App;
