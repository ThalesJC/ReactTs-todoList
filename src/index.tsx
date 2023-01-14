import ReactDOM from 'react-dom/client';
import Provider from './context/myProvider'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider>
    <App />
  </Provider>
);

reportWebVitals();
