
import './App.css'
import Banner from './Components/Banner/Banner'
import NavBar from './Components/Navbar/NavBar'
import OurImpact from './Components/OurImpact/OurImpact'
import Primium from './Components/Primium/Primium'

function App() {
  

  return (
   <>
 <header>
   <NavBar></NavBar>
   <Banner></Banner>
 </header>
 <main>
  <OurImpact></OurImpact>
  <Primium></Primium>
 </main>
   </>
  )
}

export default App
