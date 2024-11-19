import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import { ErrorMessage } from './components/ErrorMessage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={({ error }) => (
      <ErrorMessage message={error.message} />
    )}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);