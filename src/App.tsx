import { BrowserRouter as Router } from 'react-router-dom';
import RouterConfig from './navigation/RouterConfig';
import './assets/styles/styles.css'
import { FormModalProvider } from './components/Modal/components/FormModal/FormModalProvider';

function App() {
  return (
    <FormModalProvider>
      <Router>
        <RouterConfig />
      </Router>
    </FormModalProvider>
  )
}

export default App