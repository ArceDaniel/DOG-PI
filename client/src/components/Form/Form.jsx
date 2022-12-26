import style from "./index.module.css";
import Card from "../Card/Card.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import validate from "./validate";
import { apiPostBreed } from "../../features/apiPetitions.js";

export default function Form() {
  const { temperament } = useSelector((state) => state.dog);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    allFields: "All fields are required",
  });
  const [newBreed, setNewBreed] = useState({
    name: "",
    MaxWeight: "",
    MinWeight: "",
    MaxHeight: "",
    MinHeight: "",
    MinLifeSpan: "",
    MaxLifeSpan: "",
    temperaments: [],
    image: "",
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(Object.keys(errors));
    setNewBreed({
      ...newBreed,
      [name]: value,
    });
    setErrors(
      validate({
        ...newBreed,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleChangeTemperaments = (e) => {
    const { value } = e.target;
    if (newBreed.temperaments.includes(value + " ")) {
      return "puto";
    }
    setNewBreed({
      ...newBreed,
      temperaments: [value + " ", ...newBreed.temperaments],
    });
  };
  const onsubmitnt = (e) => {
    e.preventDefault();
    window.alert("All fields are required");
  };
  const onsubmit = (e) => {
    e.preventDefault();
    apiPostBreed(newBreed)
      .then((res) => navigate('/home'))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.columns}>
          <div>
            <div className={style.listItem}>
              <NavLink to="/home"> 🢀 Back </NavLink>
            </div>
            {newBreed ? <Card breed={newBreed} /> : null}
          </div>
        </div>
        <div className={style.columns}>
          <div className={style.formContainer}>
            <h2>Create Breed</h2>
            <div className={style.form}>
              <form
                className={style.formBox}
                onSubmit={Object.keys(errors).length ? onsubmitnt : onsubmit}
              >
                <input
                  id="nameInput"
                  type="text"
                  className={style.input}
                  value={newBreed.name}
                  name="name"
                  placeholder="name"
                  onChange={handleChangeInput}
                />
                {errors.name && (
                  <span className={style.error}>{errors.name} </span>
                )}
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
                {errors.height && (
                  <span className={style.error}>{errors.height} </span>
                )}
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
                {errors.weight && (
                  <span className={style.error}>{errors.weight} </span>
                )}
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
                {errors.life && (
                  <span className={style.error}>{errors.life} </span>
                )}

                <input
                  id="imageInput"
                  type="text"
                  className={style.input}
                  value={newBreed.image}
                  name="image"
                  onChange={handleChangeInput}
                  placeholder="Image Url "
                />
                {errors.url && (
                  <span className={style.error}>{errors.url} </span>
                )}
                <select
                  className={`${style.input} ${style.select}`}
                  onChange={handleChangeTemperaments}
                >
                  <option disabled value>
                    filter by temperament
                  </option>
                  <option value="all">ALL</option>
                  {temperament.map((e) => (
                    <option value={e} key={e}>
                      {e}
                    </option>
                  ))}
                </select>
                {errors.temp && (
                  <span className={style.error}>{errors.temp} </span>
                )}
                <button
                  className={
                    Object.keys(errors).length ? style.disabled : style.button
                  }
                >
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
