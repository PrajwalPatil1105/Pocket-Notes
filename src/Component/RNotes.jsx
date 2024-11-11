import React, { useEffect, useState } from "react";
import styles from "./RNotes.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCircle } from "@fortawesome/free-solid-svg-icons";

function RNotes({
  item,
  data,
  setData,
  setIsScreenVisible,
  setIsButtonVisible,
  setIsSmallScreen,
}) {
  const [InputData, setInputData] = useState(
    localStorage.getItem("InputField")
      ? JSON.parse(localStorage.getItem("InputField"))
      : ""
  );

  const [isDisabled, setIsDisabled] = useState(true);
  const [ImgToDisplay, setImgToDisplay] = useState();
  const [Msg, setMsg] = useState("");

  useEffect(() => {
    if (InputData.length === 0) {
      setIsDisabled(true);
      setImgToDisplay("/Images/Send.png");
      setMsg("Please Type Something In TextBox ");
    } else {
      setIsDisabled(false);
      setImgToDisplay("/Images/Send1.png");
      setMsg("Add To Notes");
    }
  }, [InputData]);

  useEffect(() => {
    localStorage.setItem("InputField", JSON.stringify(InputData));
  }, [InputData]);

  function PushNote() {
    const newNote = {
      text: InputData,
      date: new Date().toLocaleString("en-DM", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      time: new Date().toLocaleString("en-DM", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };

    const updatedData = [...data];
    updatedData[data.findIndex((i) => i === item)]["Note"] = [
      ...item.Note,
      newNote,
    ];

    setData(updatedData);
    setInputData("");
  }

  function Back() {
    setIsSmallScreen(false);
    setIsScreenVisible(true);
    setIsButtonVisible("block");
  }

  return (
    <div className={styles.NotesPage}>
      <header className={styles.NoteHeading}>
        <button className={styles.Back} onClick={Back}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} />
        </button>
        <div
          className={styles.NotesInitialName}
          style={{ backgroundColor: item.UserColor }}
        >
          <h1 className={styles.NotesInitials}>
            {item.UserName.slice(0, 2).toUpperCase()}
          </h1>
        </div>
        <div className={styles.NotesFullName}>
          {item.UserName.charAt(0).toUpperCase() + item.UserName.slice(1)}
        </div>
      </header>
      <main className={styles.MainNotes}>
        {item.Note.map((note, index) => (
          <>
            <div key={index} className={styles.NotesDisplay}>
              <p className={styles.NoteData}>{note?.text}</p>
            </div>
            <div className={styles.DateDiv}>
              <p className={styles.NoteDate}>
                {" "}
                {note?.date} <span className={styles.dot}>.</span>{" "}
                <span>{note?.time}</span>
              </p>
            </div>
          </>
        ))}
      </main>
      <footer className={styles.NoteInput}>
        <button
          disabled={isDisabled}
          title={Msg}
          className={styles.PushButton}
          onClick={PushNote}
        >
          <img className={styles.SendImg} src={ImgToDisplay} alt="" />
        </button>
        <textarea
          value={InputData}
          onChange={(e) => setInputData(e.target.value)}
          className={styles.NotesTextArea}
          placeholder="Enter your text here......."
        ></textarea>
      </footer>
    </div>
  );
}

export default RNotes;
