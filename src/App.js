import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import "../src/CSSfolder/Navbar.css"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import Users from './Components/Users';
import ReactPaginate from 'react-paginate';



function App() {

  if(document.getElementsByClassName("ifnofound"))
  {
    console.log("haan hai")
  }
  return (<>
   
    
    <div className="App">
   <Navbar/>
    
    <Users/>
   
    
    </div>
   
    </>
    
  );
}

export default App;
