import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreateTweet={showModalHandler} />
      <main>
        <PostsList
          isTweeting={modalIsVisible}
          onStopTweeting={hideModalHandler}
        />
      </main>
    </>
  );
}
