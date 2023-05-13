import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ToDoList from './todocontainer/ToDoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToDoList/>
  </React.StrictMode>,
)
