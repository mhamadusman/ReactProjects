import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/RandomColor'
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';


function App() {
  return (
   <>
    {/*Accordian compenenet */}
    <Accordian/>
    {/*Random color generator*/}
    <RandomColor/>
    {/*Stars Rating*/}
    <StarRating noOfStars = {10}/>
    {/*fetching images using api endpoint*/}
    <ImageSlider url={"https://picsum.photos/v2/list?page=1&limit=5"}/>


   </>
  );
}

export default App;
