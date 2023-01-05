import style from "./index.module.css";

export default function Temperament({ temp, setTemps, newBreed }) {
  const click = (e) => {
    setTemps({
      ...newBreed,
      temperaments: newBreed.temperaments.filter((t) => t !== e.target.value),
    });
  };
  return (
    <div className={style.temps}>
      {temp.map((e) => (
        <button onClick={click} key={e} value={e} className={style.btn}>
          {e}
        </button>
      ))}
    </div>
  );
}
