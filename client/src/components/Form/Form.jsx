import style from "./index.module.css";
import Card from "../Card/Card.jsx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Form() {
  const {temperament} = useSelector((state) => state.dog);
  const [newBreed,  setNewBreed]= useState({
    name: '',
    MaxWeight:'',
    MinWeight:'',
    MaxHeight:'',
    MinHeight:'',
    MinLifeSpan:'',
    MaxLifeSpan:'',
    temperaments: '',
    image: '',
  })
  
  const handleChangeInput = (e)=>{
    const { name, value } = e.target;
    setNewBreed({
        ...newBreed,
        [name]: value
    })
  }
  return (
    <>
      <div className={style.container}>
        <div className={style.columns}>
          <div>
            <div className={style.listItem}>
              <NavLink to="/home"> 🢀 Back </NavLink>
            </div>
            { newBreed?<Card breed={newBreed} />:null}
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.formContainer}>
            <h2>Create Breed</h2>
            <div className={style.form}>
              <form className={style.formBox}>
                <input
                  id="nameInput"
                  type="text"
                  className={style.input}
                  value={newBreed.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChangeInput}
                />
                <div className={style.inputs}>
                  <input
                    className={style.input}
                    id="heightInput"
                    type="number"
                    value={newBreed.MinHeight}
                    name="MinHeight"
                    onChange={handleChangeInput}
                    placeholder="Min Height"
                  />
                  <input
                    id="heightInput"
                    type="number"
                    className={style.input}
                    value={newBreed.MaxHeight}
                    name="MaxHeight"
                    onChange={handleChangeInput}
                    placeholder="Max Height"
                  />
                </div>
                <div className={style.inputs}>
                  <input
                    id="weightInput"
                    type="number"
                    className={style.input}
                    value={newBreed.MinWeight}
                    name="MinWeight"
                    onChange={handleChangeInput}
                    placeholder="Min Weight"
                  />

                  <input
                    id="weightInput"
                    type="number"
                    className={style.input}
                    value={newBreed.MaxWeight}
                    name="MaxWeight"
                    onChange={handleChangeInput}
                    placeholder="Max Weigth"
                  />
                </div>
                <div className={style.inputs}>
                  <input
                    id="lifeInput"
                    type="number"
                    className={style.input}
                    value={newBreed.MinLifeSpan}
                    name="MinLifeSpan"
                    onChange={handleChangeInput}
                    placeholder=" Min Life Span "
                  />

                  <input
                    id="lifeInput"
                    type="number"
                    className={style.input}
                    value={newBreed.MaxLifeSpan}
                    name="MaxLifeSpan"
                    onChange={handleChangeInput}
                    placeholder=" Max Life Span "
                  />
                </div>
                <input
                  id="imageInput"
                  type="text"
                  className={style.input}
                  value={newBreed.image}
                  name="image"
                  onChange={handleChangeInput}
                  placeholder="Image Url "
                />
                <select className={`${style.input} ${style.select}`}>
                  <option disabled value>
                    filter by temperament
                  </option>
                  <option value = "all">ALL</option>
                  {temperament.map((e) => (
                    <option value = {e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>
                <button>
                  Create Breed!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
