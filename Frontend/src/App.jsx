import './App.css'
import Facebook from './components/Home'
import { Nav } from './components/Nav'

function App() {

  return (
    <>

      <Nav />
      <Facebook />
      <div>
        <h1 className='text-center text-3xl font-bold'>Hola</h1>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
      </div>
    </>
  )
}

export default App
