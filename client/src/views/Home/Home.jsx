import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cards from '../../components/Cards/Cards'
import Filter from '../../components/FiltersAndSort/Filter'
import ScrollToTop from '../../components/ScrollTop/ScrollTop'
import style from './index.module.css'
import {apiAlldogs, apiAllTemperaments} from '../../features/apiPetitions.js'

export default function Home(){

    const dispatch = useDispatch();
    useEffect(()=>{
        apiAlldogs(dispatch);
        apiAllTemperaments(dispatch);
    },[])
    
    return(
    <>
    <div className={style.container}>
     <div className={style.filter}>
        <Filter />
     </div>
     <div>
        <Cards />
     </div>
    </div>
     <ScrollToTop />
    </>
    )
    
}