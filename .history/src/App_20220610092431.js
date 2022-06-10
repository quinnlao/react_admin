import Aside from './aside/aside';
import Header from './header/header';
import Main from './container/container';
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
