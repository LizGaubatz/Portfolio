import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './components/Context/theme'
import reportWebVitals from './reportWebVitals';
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

reportWebVitals();


