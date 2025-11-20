import HomePage from './pages/Home';
import { createBrowserRouter } from 'react-router';
import NotFoundPage from './pages/NotFound';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import ForgotPasswordPage from './pages/ForgotPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/register',
    element: <SignupPage />,
    errorElement: <NotFoundPage />,
  },
]);

export default router;