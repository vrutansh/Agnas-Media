import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './App.css'
import WorkScroller from './components/WorkScroller.jsx'
import { LandingPageContent } from './components/Content.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <LandingPageContent /> */}
    {/* <Content /> */}
  </React.StrictMode>,
)
