import logo from './production.svg';
import './App.css';

function App() {

  const welcome = "Bem vindo";
  const academy = "</ Globo Academy>"
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>{welcome}</p>
        <img src={logo} />
          <p>Hello, World! Carolina Ribeiro</p>  
        <p>{academy}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
