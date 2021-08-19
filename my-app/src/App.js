import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./Pages/BeforLoginPage/LoginPage";
import Grid from "./Grid";
import Footer from "./Components/SharedComponents/Footer";
import { firebaseApp } from "./firebase";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const dbCollection = firebaseApp.firestore().collection('UsersDataCol')
  const [UserAuthed, setUserAuthed] = useState();
  useEffect(() => {
    let token = localStorage.token;
    let email = localStorage.email;
    dbCollection.get().then(res=>{
      res.docs.forEach(doc=>{
        if(doc.data().Email === email){
          token === doc.data().Token ? setUserAuthed(true) : setUserAuthed(false);
        }
      })
    })
  }, []);
  return (
    <div className="App">
      {UserAuthed ? <Grid changeAuthFlag={setUserAuthed}/> : <LoginPage changeAuthFlag={setUserAuthed}/>}
      <Footer />
    </div>
  );
}

export default App;
