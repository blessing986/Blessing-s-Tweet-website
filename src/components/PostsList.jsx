import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import { useState } from "react";

export default function PostsList({ isTweeting, onStopTweeting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isTweeting && (
        <Modal onClose={onStopTweeting}>
          <NewPost onCancel={onStopTweeting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author="Teddy" body="I love you" />
      </ul>
    </>
  );
}
