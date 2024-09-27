/* eslint-disable react/no-unknown-property */

import {  NavLink } from 'react-router-dom'
import './header.css'
const Header = () => {
    return(
        <ul>
  <li><NavLink class="active" to="/">Home</NavLink></li>
  <li><NavLink to="/users">User</NavLink></li>
  <li><NavLink to="/books">Book</NavLink></li>
</ul>
    )
}
export default Header