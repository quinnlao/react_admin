import { connect } from 'react-redux';
import Aside from './aside/aside';
import Header from './header/header';
import Main from './main/main';
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

export default connect((props,state)=>Object.assign({},props,state),{})(App)
