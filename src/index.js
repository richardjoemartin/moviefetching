import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <Content/>
    <Footer/>
  </React.StrictMode>
);

