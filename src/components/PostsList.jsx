import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

export default function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Blessing" body="React.js is awesome" />
        <Post author="Teddy" body="I love you" />
      </ul>
    </>
  );
}
