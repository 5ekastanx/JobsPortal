import './App.css';
import Main from './pages/main/index.jsx'
import Header from './components/header'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
