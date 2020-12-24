import logo from './logo.svg';
import './App.css';

function List(props) {
  return (
    props.list.map((item) =>
      <li>item</li>
    ));
}
let ls = ["apple", "orange"];
function App(props) {
  return (
    <div className="App">
      <h1>hello {props.name}</h1>
      <List list={ls}></List>
    </div>
  );
}

export default App;
