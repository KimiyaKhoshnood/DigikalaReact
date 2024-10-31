import { createRoot } from 'react-dom/client'
import App from './Pages/Home/App/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/Store.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
