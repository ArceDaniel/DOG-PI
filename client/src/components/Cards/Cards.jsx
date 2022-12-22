import Card from '../Card/Card'
import style from './index.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { apiAlldogs } from '../../features/apiPetitions';
import Pagination from './Pagination';


export default function Cards(){

    const dispatch = useDispatch();
    useEffect(()=>{
        apiAlldogs(dispatch);
    },[])
    
    const state = useSelector((state) => state.dog);

    const [currentPage, setCurrentPage] = useState(1);  
    const [dogsPerPage, setDogsPerPage] = useState(12); 
    const indexOfLastDog = currentPage * dogsPerPage; 
    const indexOfFirstDog = indexOfLastDog - dogsPerPage; 
    const currentDogs = state.allDogs?.slice(indexOfFirstDog, indexOfLastDog);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


  
    return(
        <>
        <div>
        <Pagination
                dogsPerPage={dogsPerPage} // cantidad de perritos por pagina
                allDogs={state.allDogs?.length} // cantidad de perritos
                currentPage={currentPage} // pagina actual
                paginado={paginate} // funcion para paginacion
         />
        </div>
        <div className={style.container}>
        {
            state.allDogs?(
                currentDogs.map(e=> <Card key={e.name} breed={e}/>)
                ):(null)
            }
        </div>
        </>
    )
} 