import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styles from "./Rinitial.module.css";
function RInitial() {
  return (
    <div className={styles.InitialPage}>
      <img className={styles.Img1} src="/public/images/img1.png" alt="" />
      <h1 className={styles.Title}>Pocket Notes</h1>
      <p className={styles.Para1}>
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
      <p className={styles.Encryption}>
        <FontAwesomeIcon icon={faLock} beatFade /> &nbsp; end-to-end encrypted
      </p>
    </div>
  );
}

export default RInitial;
