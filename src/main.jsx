import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AppProvider } from './context/productcontext.jsx';
import { FilterProvider } from './context/filtercontext.jsx';
import { CartProvider } from './context/cartcontext.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  </Auth0Provider>,
)