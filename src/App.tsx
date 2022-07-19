import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouterConfig } from './navigation/RouterConfig';
import './styles/styles.css'

function App() {
  return (
    <Router>
      <RouterConfig />
    </Router>
  )
}

export default App