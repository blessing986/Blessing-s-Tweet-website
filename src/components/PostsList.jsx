import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList({ isTweeting, onStopTweeting }) {
  return (
    <>
      {isTweeting && (
        <Modal onClose={onStopTweeting}>
          <NewPost onCancel={onStopTweeting} />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author="Teddy" body="I love you" />
      </ul>
    </>
  );
}
