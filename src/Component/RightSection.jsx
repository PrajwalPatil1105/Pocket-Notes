import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import styles from "./RightSection.module.css";
import RInitial from "./RInitial";
import RNotes from "./RNotes";

function RightSection({
  item,
  data,
  setData,
  setIsScreenVisible,
  setIsButtonVisible,
  isSmallScreen,
}) {
  return (
    <section>
      {" "}
      {item ? (
        <RNotes
          item={item}
          data={data}
          setData={setData}
          setIsScreenVisible={setIsScreenVisible}
          setIsButtonVisible={setIsButtonVisible}
          isSmallScreen={isSmallScreen}
        />
      ) : (
        <RInitial />
      )}
    </section>
  );
}

export default RightSection;
