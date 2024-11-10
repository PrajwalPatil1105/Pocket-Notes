import React, { useEffect, useState } from "react";
import styles from "./Popup.module.css";

function Popup({ onClose, setData, Data }) {
  const [UserName, setUserName] = useState("");
  const [UserColor, setUserColor] = useState("");
  const [Note, setNote] = useState([]);

  const [UserNameError, setUserNameError] = useState("");
  const [UserColorError, setUserColorError] = useState("");
  const [CheckName, setCheckName] = useState("");

  const [Color1, setColor1] = useState("none");
  const [Color2, setColor2] = useState("none");
  const [Color3, setColor3] = useState("none");
  const [Color4, setColor4] = useState("none");
  const [Color5, setColor5] = useState("none");
  const [Color6, setColor6] = useState("none");

  function add() {
    if (UserName.length === 0) {
      setUserNameError("Please Enter Name");
    } else if (UserName.length === 1) {
      setUserNameError("Name Should Have Atleast Two Alphabets");
    } else {
      setUserNameError("");
    }

    const isDuplicateName = Data.some(
      (entry) => entry.UserName.toLowerCase() === UserName.toLowerCase()
    );
    if (isDuplicateName) {
      setCheckName("Name already exists");
      return;
    } else {
      setCheckName("");
    }

    setUserColorError(UserColor.length === 0 ? "Please Select Color" : "");

    if (UserName.length >= 2 && UserColor.length > 0 && !isDuplicateName) {
      setData((preData) => [...preData, { UserName, UserColor, Note }]);
      onClose();
    }
  }

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
    if (e.target.value.length <= 2) {
      setUserNameError("");
    }
  };

  const handleUserColorChange = (e) => {
    setUserColor(e.target.value);
    if (e.target.value.length > 0) {
      setUserColorError("");
    }
  };

  useEffect(() => {
    setColor1(
      UserColor === "rgba(179, 139, 250, 1)" ? "3px solid black" : "none"
    );
    setColor2(
      UserColor === "rgba(255, 121, 242, 1)" ? "3px solid black" : "none"
    );
    setColor3(
      UserColor === "rgba(67, 230, 252, 1)" ? "3px solid black" : "none"
    );
    setColor4(
      UserColor === "rgba(241, 149, 118, 1)" ? "3px solid black" : "none"
    );
    setColor5(UserColor === "rgba(0, 71, 255, 1)" ? "3px solid black" : "none");

    setColor6(
      UserColor === "rgba(102, 145, 255, 1)" ? "3px solid black" : "none"
    );
  }, [UserColor]);

  return (
    <>
      <div className={styles.Popup} onClick={onClose}></div>
      <div className={styles.PopupMenu}>
        <h1 className={styles.PopupHeading}>Create New Group</h1>
        <div className={styles.UserGroup}>
          <label className={styles.GroupName}>Group Name</label>
          <input
            type="text"
            className={styles.GroupNameInput}
            placeholder="Enter group name"
            onChange={handleUserNameChange}
          />
          <p className={styles.NameError}>{UserNameError}</p>
        </div>
        <div className={styles.FavColor}>
          <label className={styles.GroupColor}>Choose Color</label>
          <button
            value={"rgba(179, 139, 250, 1)"}
            className={styles.Lavender}
            style={{ border: Color1 }}
            onClick={handleUserColorChange}
          ></button>
          <button
            value={"rgba(255, 121, 242, 1)"}
            className={styles.Pink}
            style={{ border: Color2 }}
            onClick={handleUserColorChange}
          ></button>
          <button
            value={"rgba(67, 230, 252, 1)"}
            className={styles.AquaBlue}
            style={{ border: Color3 }}
            onClick={handleUserColorChange}
          ></button>
          <button
            value={"rgba(241, 149, 118, 1)"}
            className={styles.Orange}
            style={{ border: Color4 }}
            onClick={handleUserColorChange}
          ></button>
          <button
            value={"rgba(0, 71, 255, 1)"}
            className={styles.Blue}
            style={{ border: Color5 }}
            onClick={handleUserColorChange}
          ></button>
          <button
            value={"rgba(102, 145, 255, 1)"}
            className={styles.LightBlue}
            style={{ border: Color6 }}
            onClick={handleUserColorChange}
          ></button>
          <p className={styles.ColorError}>{UserColorError}</p>
        </div>
        <p className={styles.AlreadyExistError}>{CheckName}</p>
        <button className={styles.Create} onClick={add}>
          Create
        </button>
      </div>
    </>
  );
}

export default Popup;
