import styles from './HomePostFeed.module.scss';

import { homePostFeedData } from './HomePostFeed.data';
import { Post } from './Post/Post';

const postData = homePostFeedData.posts;


export const HomePostFeed = () => {


  return (
    <div className={styles.HomePostFeed}>
      {
        postData.map((post) => {
          return (
            <div className={styles.HomePostFeedPostContainer}>
              <Post postData={post} />
            </div>
          )
        })
      }
    </div>
  )
}