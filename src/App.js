import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import { useEffect, useState } from 'react'

function App() {
  const [isScroll,setIsScroll] = useState(true)

  useEffect(()=>{
    const handleScroll = () => {
      if (window.scrollY < (document.getElementById('yams').scrollHeight -900)) {
        console.log(isScroll)
        setIsScroll(true)
      } else{
        console.log('WROGN')
        setIsScroll(false)
      }
    }
    console.log(isScroll)
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  },[])

  return (
    <div id='yams'>
      <Header/>
      {!isScroll ? (
        <>
        </> 
      ):(
        <Nav/>
      )}
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
