import style from './index.module.css'


export default function Card({breed}){
  const {name, image, weight,height, lifeSpan,temperaments} = breed;
  const temp = temperaments?.split(',').slice(0,3).join();
    return(
        <div className={style.flipCard}>
            <div className={style.flipCardInner}>
                <div className={style.flipCardFront}>
                  <div className={style.imgContainer}>
                    <img src={image} alt={name} />
                  </div>
                  <p className={style.title}>{name}</p>
                  <p className={style.temp}>{temp}</p>
                  
                </div>
                <div className={style.flipCardBack}>
                  <p className={style.subtitle}>weight:</p>
                  <p>{weight}</p>
                  <p className={style.subtitle}>height:</p>
                  <p>{height}</p>
                  <p className={style.subtitle}>life span:</p>
                  <p>{lifeSpan}</p>
                </div>
            </div>
        </div>
    )
} 