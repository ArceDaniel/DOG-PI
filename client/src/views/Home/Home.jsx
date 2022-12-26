import Cards from '../../components/Cards/Cards'
import Filter from '../../components/FiltersAndSort/Filter'
import ScrollToTop from '../../components/ScrollTop/ScrollTop'
import style from './index.module.css'
import Sort from '../../components/FiltersAndSort/Sort';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { apiAlldogs, apiAllTemperaments } from '../../features/apiPetitions';

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
        <Sort />
     </div>
     <div>
        <Cards />
     </div>
    </div>
     <ScrollToTop />
    </>
    )
    
}