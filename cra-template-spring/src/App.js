import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img style={{width:'100px', height:'100px'}} src='./assets/add.png' alt=''></img>
        <p className='lesstest'>测试less</p>
      </header>
    </div>
  );
}

export default App;
