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
  const [ScreenWidth, setScreenWidth] = useState();

  const [Data, setData] = useState(
    localStorage.getItem("Data") ? JSON.parse(localStorage.getItem("Data")) : []
  );

  function PopScreen() {
    setIsPopupOpen(!isPopupOpen);
  }

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    if (window.innerWidth >= 768) {
      setIsSmallScreen(true);
    }
  }, [ScreenWidth]);

  function onSelectItem(index) {
    setSelectedItem(Data[index]);
    setIsSmallScreen(true);
    if (window.innerWidth <= 769) {
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

        {isSmallScreen && (
          <RightSection
            item={selectedItem}
            data={Data}
            setData={setData}
            setIsScreenVisible={setIsScreenVisible}
            setIsButtonVisible={setIsButtonVisible}
            setIsSmallScreen={setIsSmallScreen}
          />
        )}

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
