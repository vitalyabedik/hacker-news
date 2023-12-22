import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Toast = (): JSX.Element => (
  <ToastContainer
    autoClose={4000}
    closeOnClick
    draggable
    hideProgressBar={false}
    newestOnTop={false}
    pauseOnFocusLoss
    pauseOnHover
    position={'top-center'}
    rtl={false}
    theme={'colored'}
  />
)
