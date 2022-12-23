import { useDispatch } from 'react-redux';
import { apiAllbyname } from '../../features/apiPetitions';
import style from './index.module.css'

export default function SearchBard(){
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        e.preventdefault();
        apiAllbyname(dispatch, e.target.value);
    }
    const handleChange = (e)=>{
        apiAllbyname(dispatch, e.target.value);
    }
    return(
        <form onSubmit={(e) => handleSubmit(e)}>
        <input
            type="text"
            id="title"
            className={style.Bar}
            onChange={handleChange}
            placeholder='Search breed'
        />
    </form>
    )
    
}