import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux'
import { store } from './redux-toolkit/store/store.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
        <Provider store={store}>
     
      <App />

     
        </Provider>
      
    </ChakraProvider>
  </React.StrictMode>
);
