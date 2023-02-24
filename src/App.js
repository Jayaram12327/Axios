import logo from './logo.svg';
import './App.css';
import ListQuotes from './components/ListQuotes';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

function App() {
  return (
    <div className="App">
     <ListQuotes/>
     {/* <ComponentA/> */}
     <ComponentB/>
    </div>
  );
}

export default App;
