import style from "./index.module.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../features/axios.js";
import Card from "../../components/Card/Card.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import swal from "sweetalert";

export default function Details() {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/dogs/${id}`)
      .then((e) => setBreed(e.data))
      .catch((err) => {
        console.clear();
        swal({
          title: "Error!",
          text: `${err.response.data}`,
          icon: "error",
          button: "go to Home!",
        }).then(() => navigate("/home"));
      });
  }, [id]);

  return (
    <>
      <div className={style.container}>
            <div className={style.listItem}>
              <NavLink to="/home"> 🢀 Back </NavLink>
            </div>
          {breed?(
        <div className={style.details}>
            <div className={style.columns}>
            <div className={style.card}> <Card breed={breed} /></div>
          </div>
          <div className={style.columns}>
            <h2 className={style.name}>{breed?.name}</h2>
            <p className={style.text}>
              These dogs can weight between <strong>{breed?.weight}</strong> kg.
            </p>
            <p className={style.text}>
              And measure between <strong>{breed?.height}</strong> cm.
            </p>
            <p className={style.text}>
              Their average age is between <strong>{breed?.lifeSpan}</strong>
            </p>
            <p className={style.text}>Their temperaments are: </p>
            <p className={style.text}>
              {" "}
              <strong>{breed?.temperaments}</strong>{" "}
            </p>
          </div>
        </div>
        ):<Loading />}
      </div>
    </>
  );
}
