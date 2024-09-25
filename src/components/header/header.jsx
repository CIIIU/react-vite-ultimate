/* eslint-disable react/no-unknown-property */

import {  NavLink } from 'react-router-dom'
import './header.css'
const Header = () => {
    return(
        <ul>
  <li><NavLink class="active" to="/">Home</NavLink></li>
  <li><NavLink to="/users">User</NavLink></li>
  <li><NavLink to="/products">Product</NavLink></li>
</ul>
    )
}
export default Header