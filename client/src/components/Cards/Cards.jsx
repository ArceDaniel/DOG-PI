import Card from "../Card/Card";
import style from "./index.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "./Pagination";
import Loading from "../Loading/Loading";

export default function Cards() {
  const state = useSelector((state) => state.dog);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(12);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = state.dogsFilter?.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!state.dogsFilter.length) {
    return <Loading />
  } else {
    return (
      <>
        <div>
          <Pagination
            dogsPerPage={dogsPerPage} 
            allDogs={state.dogsFilter?.length} 
            currentPage={currentPage || 1} 
            paginado={paginate} 
          />
        </div>
        <div className={style.container}>
          {state.dogsFilter
            ? currentDogs.map((e) => <Card key={e.name} breed={e} />)
            : null}
        </div>
        <Pagination
          dogsPerPage={dogsPerPage}
          allDogs={state.dogsFilter?.length}
          currentPage={currentPage}
          paginado={paginate}
        />
      </>
    );
  }
}
