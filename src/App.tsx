import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';
import './assets/styles/styles.css'

function App() {
  return (
    <Router>
      <RouterConfig />
    </Router>
  )
}

export default App