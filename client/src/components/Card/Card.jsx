import style from './index.module.css'


export default function Card(){

    return(
        <div className={style.flipCard}>
            <div className={style.flipCardInner}>
                <div className={style.flipCardFront}>
                  <p className={style.title}>FLIP CARD</p>
                  <p>Hover Me</p>
                </div>
                <div className={style.flipCardBack}>
                  <p className={style.title}>BACK</p>
                  <p>Leave Me</p>
                </div>
            </div>
        </div>
    )
} 