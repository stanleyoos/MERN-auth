import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { Container } from "react-bootstrap"

const App = () => {
  return (
    <>
    <Header/>
    <Container>
      <Outlet className='my-2'/>
    </Container>
    
    </>
  )
}

export default App