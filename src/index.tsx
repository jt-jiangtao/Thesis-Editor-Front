import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/layout/App'
import { BrowserRouter } from 'react-router-dom'
import '@/styles/index.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
