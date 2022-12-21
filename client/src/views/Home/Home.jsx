import Cards from '../../components/Cards/Cards'
import ScrollToTop from '../../components/ScrollTop/ScrollTop'
import style from './index.module.css'

export default function Home(){

    return(
    <>
    <div className={style.container}>
     <div></div>
     <div>
        <Cards />
     </div>
    </div>
     <ScrollToTop />
    </>
    )
    
}