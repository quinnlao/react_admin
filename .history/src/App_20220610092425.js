import Aside from './aside/aside';
import Header from './header/header';
import Container from './container/container';
import './App.css';

function App() {
  return (
    <div className="App">
      <Aside></Aside>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
