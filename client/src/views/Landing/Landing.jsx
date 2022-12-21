import { NavLink } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';
import styles from './index.module.css';

const Landing = () =>{
  return (
    <div className={styles.landingPage}>
        <Slider/>
      <div className={styles.container_text}>
        <h1 className={styles.title}>Pi dogs</h1>
        
          <NavLink to="/home" className={styles.btn}>
            <span>Start</span>
          </NavLink>
      </div>
    </div>
  )
}

export default Landing;