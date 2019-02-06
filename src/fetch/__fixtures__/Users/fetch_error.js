import Users from '../../components/Users';

export default {
  component: Users,

  fetch: [
    {
      matcher: '/users',
      response: 404
    }
  ]
};