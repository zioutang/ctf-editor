import Base from './Components/Base';
import HomePage from './Components/HomePage';
import LoginPage from './Containers/LoginPage';
import SignUpPage from './Containers/SignUpPage';


const routes = {
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage,
    },

    {
      path: '/login',
      component: LoginPage,
    },

    {
      path: '/signup',
      component: SignUpPage,
    },

  ],
};

export default routes;
