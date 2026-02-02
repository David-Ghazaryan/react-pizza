import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import { store } from './redux/store.js'
import {Provider} from 'react-redux'
const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
