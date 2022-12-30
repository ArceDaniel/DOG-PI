import { useDispatch } from "react-redux";
import { apiAllbyname } from "../../features/apiPetitions";
import style from "./index.module.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, SetInput] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    apiAllbyname(dispatch, input).catch((err) => {
      swal({
        title: "Error!",
        text: `${err.response.data}`,
        icon: "error",
        button: "ok :(",
      });
    });
  };
  const handleChange = (e) => {
    SetInput(e.target.value);
   // apiAllbyname(dispatch, e.target.value);
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        type="text"
        id="title"
        className={style.Bar}
        onChange={handleChange}
        placeholder="Search breed"
      />
    </form>
  );
}
