import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/RandomColor'
import StarRating from './components/StarRating';


function App() {
  return (
   <>
    {/*Accordian compenenet */}
    <Accordian/>
    {/*Random color generator*/}
    <RandomColor/>
    {/*Stars Rating*/}
    <StarRating noOfStars = {10}/>

   </>
  );
}

export default App;
