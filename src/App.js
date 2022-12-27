
import './App.css';
import Category from './components/Category/Category';
import Food from './components/Foods/Food';
import HeadingCards from './components/HeadingCards/HeadingCards';
import Hero from './components/Hero/Hero';
import Navbar from './Layout/Navbar/Navbar';
import Main from './main/Main';

function App() {
  return (
   <>
    {/* <div className='bg-slate-800text-black text-3xl'>
    Hello, Yazid from dev branch!
    </div>
    <Main /> */}
    <Navbar />
    <Hero />
    <HeadingCards />
    <Food />
    <Category />
   </>
  );
}

export default App;
