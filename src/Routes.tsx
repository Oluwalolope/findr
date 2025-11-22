import HomePage from './pages/Home';
import { createBrowserRouter } from 'react-router';
import NotFoundPage from './pages/NotFound';
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import ForgotPasswordPage from './pages/ForgotPassword';
import SearchPage from './pages/Search';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashBoard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
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
  {
    path: '/seller-dashboard',
    element: <SellerDashboard />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/buyer-dashboard',
    element: <BuyerDashboard />,
    errorElement: <NotFoundPage />,
  },
]);

export default router;