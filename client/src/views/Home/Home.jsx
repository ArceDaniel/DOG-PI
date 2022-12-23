import Cards from '../../components/Cards/Cards'
import Filter from '../../components/FiltersAndSort/Filter'
import ScrollToTop from '../../components/ScrollTop/ScrollTop'
import style from './index.module.css'
import Sort from '../../components/FiltersAndSort/Sort';

export default function Home(){
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