import React from "react";
import RInitial from "./RInitial";
import RNotes from "./RNotes";

function RightSection({
  item,
  data,
  setData,
  setIsScreenVisible,
  setIsButtonVisible,
  setIsSmallScreen,
  isSmallScreen,
  isFirstPage,
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
          setIsSmallScreen={setIsSmallScreen}
        />
      ) : (
        isFirstPage && <RInitial />
      )}
    </section>
  );
}

export default RightSection;
