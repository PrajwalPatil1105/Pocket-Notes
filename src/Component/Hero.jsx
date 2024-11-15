import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Popup from "./Popup";

function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 768);
  const [isScreenVisible, setIsScreenVisible] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState("block");
  const [isFirstPage, setIsFirstPage] = useState(window.innerWidth >= 768);

  const [Data, setData] = useState(
    localStorage.getItem("Data") ? JSON.parse(localStorage.getItem("Data")) : []
  );

  function PopScreen() {
    setIsPopupOpen(!isPopupOpen);
  }

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width >= 768) {
        setIsFirstPage(true);
      } else {
        setIsFirstPage(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            isSmallScreen={isSmallScreen}
            isFirstPage={isFirstPage}
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
