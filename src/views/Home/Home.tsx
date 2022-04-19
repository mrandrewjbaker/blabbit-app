import { useNavigate } from 'react-router-dom';

import styles from './Home.module.scss';
import { HomeNewPost } from './HomeNewPost/HomeNewPost';
import { HomePostFeed } from './HomePostFeed/HomePostFeed';


export const Home = () => {
  const navigate = useNavigate()

  return (
    <div className={styles.Home}>
      <HomeNewPost />
      <HomePostFeed/>
    </div>
  )
}