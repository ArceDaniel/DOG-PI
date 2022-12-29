import { useDispatch } from 'react-redux';
import { sortByWeight, sortByAsc } from '../../features/dogSlice';
import style from './index.module.css'

export default function Sort(){
    const dispatch = useDispatch();

    function handleChangeSortAsc(e){
        dispatch(sortByAsc(e.target.value))
    };
    function handleChangeSortWeight(e){
        dispatch(sortByWeight(e.target.value))
    };
   
    return(
    <>
    <div className={style.container} style={{marginBottom:'30px'}}>
        <h2>Sort</h2>
        <div className={style.filtercontaier}>
            <select  className={style.select} onChange={handleChangeSortAsc}>
             <option value='asc'>A-Z</option>
             <option value='des'>Z-A</option>
            </select>
            <select  className={style.select} onChange={handleChangeSortWeight}>
               <option value='max'>Max weight</option>
               <option value='min'>Min Weight</option>
            </select>
        </div>
    </div>
    </>
    )
    
}