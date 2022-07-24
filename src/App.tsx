import { BrowserRouter as Router } from 'react-router-dom';
import { FormModalProvider } from './components/Modal/components/FormModal/FormModalProvider';
import RouterConfig from './navigation/RouterConfig';
import './assets/styles/styles.css'

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