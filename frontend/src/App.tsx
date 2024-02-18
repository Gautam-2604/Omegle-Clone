
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import { Landing } from "./components/Landing"

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" component={<Landing/>} />
      <Route path="/" component={<Landing/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
