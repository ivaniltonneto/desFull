import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
