import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalContext, store } from './context'
import 'antd/dist/antd.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext.Provider value={store}>
      <App />
    </GlobalContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
