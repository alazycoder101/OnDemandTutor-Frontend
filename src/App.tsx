import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

function App() {

  return (
      <Router>
        <ThemeSwitcher />
        <RoutesComponent />
      </Router>
  )
}

export default App;
