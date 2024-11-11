import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./LeftSection.module.css";

function LeftSection({ data, onSelectItem }) {
  const [id, setid] = useState(null);

  return (
    <div className={styles.UserInfo}>
      <header className={styles.HeadingSection}>
        <h1 className={styles.Heading}>Pocket Notes</h1>
      </header>
      <div className={styles.UserList}>
        {data.map((item, index) => (
          <div
            style={{
              backgroundColor:
                id === index ? "rgba(47, 47, 47, 0.17)" : "transparent",
            }}
            key={index}
            className={styles.SubGroup}
            onClick={() => {
              setid(index);
              onSelectItem(index);
            }}
          >
            <div
              className={styles.InitialDiv}
              style={{ backgroundColor: item.UserColor }}
            >
              <h1 className={styles.Initials}>
                {item.UserName.slice(0, 2).toUpperCase()}
              </h1>
            </div>
            <h1 className={styles.UserNameDisplay}>
              {item.UserName.charAt(0).toUpperCase() + item.UserName.slice(1)}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSection;
