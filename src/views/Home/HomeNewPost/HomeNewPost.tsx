import styles from './HomeNewPost.module.scss';

export const HomeNewPost = () => {
  return(
    <div className={styles.HomeNewPost}>
      <textarea className={styles.HomeNewPostTextArea} rows={2}>

      </textarea>
    </div>
  )
}