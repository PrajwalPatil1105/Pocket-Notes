import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Popup from "./Popup";

function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isScreenVisible, setIsScreenVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState("block");

  const [Data, setData] = useState(
    localStorage.getItem("Data") ? JSON.parse(localStorage.getItem("Data")) : []
  );

  function PopScreen() {
    setIsPopupOpen(!isPopupOpen);
  }

  function onSelectItem(index) {
    setSelectedItem(Data[index]);
    if (window.innerWidth <= 400) {
      setIsScreenVisible(false);
      setIsButtonVisible("none");
    }
  }

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(Data));
  }, [Data, selectedItem]);

  return (
    <section>
      <main className={styles.main}>
        {isScreenVisible && (
          <LeftSection data={Data} onSelectItem={onSelectItem} />
        )}
        <RightSection
          item={selectedItem}
          data={Data}
          setData={setData}
          setIsScreenVisible={setIsScreenVisible}
          setIsButtonVisible={setIsButtonVisible}
          isSmallScreen={isSmallScreen}
        />
        <button
          onClick={PopScreen}
          className={styles.AddButton}
          title="Add Group"
          style={{ display: isButtonVisible }}
        >
          +
        </button>
        {isPopupOpen && (
          <Popup
            onClose={() => setIsPopupOpen(false)}
            setData={setData}
            Data={Data}
          />
        )}
      </main>
    </section>
  );
}

export default Hero;
