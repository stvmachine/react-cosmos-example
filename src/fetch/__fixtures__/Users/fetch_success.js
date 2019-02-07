import Users from '../../components/Users';

export default {
    component: Users,
    fetch: [
      {
        matcher: '/users',
        response: [
          {
            id: 1,
            name: 'Prabu'
          },
          {
            id: 2,
            name: 'Karla'
          },
          {
            id: 3,
            name: 'Linbaba'
          }
        ]
      }
    ]
  };
