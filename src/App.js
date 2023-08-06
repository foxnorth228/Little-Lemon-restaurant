import './App.css';
import Header from './layouts/header/header';
import Nav from './layouts/nav/nav';
import Main from './layouts/main/main';
import Footer from './layouts/footer/footer';

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />
    </>
  );
}

export default App;
