import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './app/graphql';
import './index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
       <Provider store={store}>
          <App />
       </Provider>
    </ApolloProvider>
  </React.StrictMode>
);


reportWebVitals();
