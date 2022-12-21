import { NavLink, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar';
import style from './index.module.css'

export default function NavBar(){
    const {pathname} = useLocation();
    return(
    <div className={style.container}>
      <div>
        <SearchBar />
      </div>
      <div>
        <ul className={style.list}>
            <li className={style.listItem}>
                <NavLink className={pathname==='/home'? style.active:null}
                to="/home" >Home</NavLink>
            </li>
            <li className={style.listItem}>
                <NavLink className={pathname==='/createBreed'? style.active:null}
                to="/createBreed" >Create breed</NavLink>
            </li>
            <li className={style.listItem}>
                <NavLink className={pathname==='/about'? style.active:null}
                to="/about" >About</NavLink>
            </li>
        </ul>
      </div>
    </div>
    )
    
}