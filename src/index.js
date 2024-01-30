import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './test/reportWebVitals';
import { CookiesProvider } from 'react-cookie';
import { AuthProvider } from './utils/authProvider';

// Query Client
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import ScrollObserver from './utils/scrollObserver';

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: true,
      },
    },
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider >
          <ScrollObserver>
            <App />
          </ScrollObserver>
        </CookiesProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
