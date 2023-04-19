import Cookies from 'js-cookie'
import {Redirect, Route} from 'react-router-dom'

import Home from '../Home'
import Products from '../Products'
import Cart from '../Cart'

const ProtectedRoute = props => {
  const JWT = Cookies.get('jwt_token')
  if (JWT === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
