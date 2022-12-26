import { useDispatch, useSelector } from 'react-redux';
import { filterByCreated, filterByTemperament } from '../../features/dogSlice';
import style from './index.module.css'

export default function Filter(){
    const {temperament} = useSelector((state) => state.dog);
    const dispatch = useDispatch();

    function handleChangeFilterTemp(e){
        dispatch(filterByTemperament(e.target.value))
    };
    function handleChangeFilterDB(e){
        dispatch(filterByCreated(e.target.value))
    };
    function clearFilter(){
        dispatch(filterByCreated('all'))
        dispatch(filterByTemperament('all'))
    }
    return(
    <>
    <div className={style.container}>
        <h2>Filter</h2>
        <div className={style.filtercontaier}>
            <select onChange={handleChangeFilterTemp}>
                <option disabled selected >filter by temperament</option>
                <option value='all'>ALL</option>
                {
                    temperament.map(e => <option value={e} key={e}>{e}</option>)
                }
            </select>
            <select onChange={handleChangeFilterDB}>
                <option disabled selected >filter by created</option>
                <option value='all'>ALL</option>
                <option value='' >API</option>
                <option value='sdS'>DB</option>
            </select>
            <button onClick={clearFilter} className={style.button}>
                clear filter
            </button>
        </div>
    </div>
    </>
    )
    
}