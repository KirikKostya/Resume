import './App.css';
import AboutMe from './AboutMe';
import Table_list_Of_My_Works from './Table-listOfMyWorks';



function App() {
  return (
<div className="App">
  <div className='mainConteinerOfResume'>
      <header><h2>Resume by Kirik Kostya</h2></header>
    <hr></hr>
      <AboutMe />
    <hr></hr> 
      <Table_list_Of_My_Works />
    <hr></hr>
      <h1>Countinue</h1>
  </div>
</div>
  );
}

export default App;

