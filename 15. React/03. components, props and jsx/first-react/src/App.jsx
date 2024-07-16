import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Cards"

function App() {

  return (
    <>
     <Navbar />
     <div className="cards">
       <Card title = "card 1" description = "this is card 1"/>
       <Card title = "card 2" description = "this is card 2"/>
       <Card title = "card 3" description = "this is card 3"/>

     </div>
     <Footer /> 
    </>
  )
}

export default App
