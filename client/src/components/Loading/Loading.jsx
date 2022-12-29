import style from "./index.module.css";

export default function Loading() {
  return (
    <>
      <div className={style.container}>
        <div
          aria-label="Orange and tan hamster running in a metal wheel"
          role="img"
          className={style.wheelAndHamster}
        >
          <div className={style.wheel}></div>
          <div className={style.hamster}>
            <div className={style.hamster__body}>
              <div className={style.hamster__head}>
                <div className={style.hamster__ear}></div>
                <div className={style.hamster__eye}></div>
                <div className={style.hamster__nose}></div>
              </div>
              <div
                className={`${style.hamster__limb} ${style.hamster__limb__fr}`}
              ></div>
              <div
                className={`${style.hamster__limb} ${style.hamster__limb__bl}`}
              ></div>
              <div
                className={`${style.hamster__limb} ${style.hamster__limb__br}`}
              ></div>
              <div
                className={`${style.hamster__limb} ${style.hamster__limb__bl}`}
              ></div>
              <div className={style.hamster__tail}></div>
            </div>
          </div>
          <div className={style.spoke}></div>
        </div>
      </div>
    </>
  );
}
