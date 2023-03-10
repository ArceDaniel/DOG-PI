import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCreated, filterByTemperament } from "../../features/dogSlice";
import style from "./index.module.css";

export default function Filter() {
  const { temperament } = useSelector((state) => state.dog);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    temperament: "all",
    isDB: "all",
  });
  var temperaments = filter.temperament;
  var isDB = filter.isDB;

  function handleChangeFilterTemp(e) {
    temperaments = e.target.value;
    setFilter({ ...filter, temperament: e.target.value });
  }
  function handleChangeFilterDB(e) {
    isDB = e.target.value;
    setFilter({ ...filter, isDB: e.target.value });
  }
  function handleChangeForm() {
    dispatch(filterByTemperament(temperaments));
    dispatch(filterByCreated(isDB));
  }
  function clearFilter() {
    setFilter({
      temperament: "all",
      isDB: "all",
    });
    dispatch(filterByCreated("all"));
    dispatch(filterByTemperament("all"));
  }
  return (
    <>
      <div className={style.container}>
        <h2>Filter</h2>
        <div className={style.filtercontaier}>
          <form onChange={handleChangeForm}>
            <select
              className={style.select}
              onChange={handleChangeFilterTemp}
              value={temperaments}
            >
              <option disabled selected value='all'>
                filter by temperament
              </option>
              <option value="all">ALL</option>
              {temperament.map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </select>
            <select
              onChange={handleChangeFilterDB}
              className={style.select}
              value={isDB}
            >
              <option disabled selected value='all'>
                filter by created
              </option>
              <option value="all">ALL</option>
              <option value="">API</option>
              <option value="sdS">DB</option>
            </select>
          </form>
          <button onClick={clearFilter} className={style.button}>
            clear filter
          </button>
        </div>
      </div>
    </>
  );
}
