import createFetchProxy from 'react-cosmos-fetch-proxy'
import createLocalStorageProxy from 'react-cosmos-localstorage-proxy'
import apolloProxyInstance from './apollo/proxy'
import reduxProxyInstance from './redux/proxy'

export default [
  reduxProxyInstance,
  createFetchProxy(),
  createLocalStorageProxy(),
  apolloProxyInstance
]
