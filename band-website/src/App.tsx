import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import BandInfo from './components/BandInfo';
import TourDates from './components/TourDates';




function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <BandInfo/>
      <TourDates/>
    </div>
  );
}

export default App;
