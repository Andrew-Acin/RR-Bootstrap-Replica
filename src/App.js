import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './TopBar';
import Background from './Background';



function App() {
  return (
    <div className="App">
      <Navbar />      
      <div className='background-div'>
        <Background />
      </div>
    </div>
    
  );
}



export default App;
