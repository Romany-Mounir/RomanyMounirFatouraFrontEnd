import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './Pages/BeforLoginPage/LoginPage';
import Grid from './Grid';
import Footer from './Components/SharedComponents/Footer';


function App() {
  return (
    <div className="App">
      <Grid/>
      {/* <LoginPage /> */}
      <Footer/>
    </div>
  );
}

export default App;
