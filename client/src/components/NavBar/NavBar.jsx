import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom'
import { apiAlldogs } from '../../features/apiPetitions';
import SearchBar from '../SearchBar/SearchBar';
import style from './index.module.css'

export default function NavBar(){
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    return(
    <div className={style.container}>
      <div>
        <SearchBar />
      </div>
      <div className={style.container2}>
      <div className={open ? style.navTogglerOpen :style.navToggler} onClick={()=>{
          setOpen(!open)
        }}>
          <span></span>
        </div>
        <ul className={`${style.list} ${open? null: style.listOpen}`}>
            <li className={style.listItem}>
                <NavLink className={pathname==='/home'? style.active:null}
                onClick={()=> apiAlldogs(dispatch)}
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