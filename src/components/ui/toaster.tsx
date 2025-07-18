import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toaster() {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      className="toast-container"
    />
  );
}
