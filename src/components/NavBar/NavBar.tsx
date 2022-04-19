import styles from './NavBar.module.scss';

import logoHorizontal from '../../assets/images/logo_horiz.png';

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBarSection}>
        <img className={styles.NavBarLogo} src={logoHorizontal}></img>
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
    </div>
  )
}