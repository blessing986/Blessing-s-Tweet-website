import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader({ onCreateTweet }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Blessing's Tweet
      </h1>
      <p>
        <button className={classes.button} onClick={onCreateTweet}>
          <MdPostAdd size={18} />
          New Tweet
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
