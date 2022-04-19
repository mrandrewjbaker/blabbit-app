import { MdThumbDown, MdThumbUp } from 'react-icons/md';
import styles from './Post.module.scss';

export interface IPostData {
  id: number,
  authorName: string;
  authorHandle: string;
  body: string;
  thumbUp: number;
  thumbDown: number;
} 

interface IPostProps {
  postData: IPostData;
}

export const Post = (props: IPostProps) => {
  return (
    <div className={styles.Post}>
      <div className={styles.PostAuthor}>
        <h4>{props.postData.authorName}</h4>
      </div>
      <div className={styles.PostBody}>
        <p>{props.postData.body}</p>
      </div>
      <div className={styles.PostButtons}>
        <div className={styles.PostButtonContainer}>
          <button className={styles.PostButton}><MdThumbUp/> 8,200</button>
        </div>
        <div className={styles.PostButtonContainer}>
          <button className={styles.PostButton}><MdThumbDown/> 155</button>
        </div>
      </div>
    </div>
  )
}