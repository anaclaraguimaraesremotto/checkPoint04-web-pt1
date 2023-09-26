import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <body className='body'>
      <Outlet/>
    </body>  
  )
}

export default App
