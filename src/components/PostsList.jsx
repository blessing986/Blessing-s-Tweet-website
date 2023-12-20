import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList({ isTweeting, onStopTweeting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {isTweeting && (
        <Modal onClose={onStopTweeting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}

      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Teddy" body="I love you" />
      </ul>
    </>
  );
}
