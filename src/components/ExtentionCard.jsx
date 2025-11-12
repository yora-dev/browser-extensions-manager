import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ActivePage from "./ActivePage";
import AllPage from "./AllPage";
import InactivePage from "./InactivePage";
import Header from "./Header";

function ExtentionCard() {
  const [isOn, setIsOn] = useState(false);
  const [extensionList, setExtensionList] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("../../data.json");
      const data = await response.json();
      if (data) {
        setExtensionList(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          index
          element={<AllPage extensionList={extensionList} />}
        ></Route>
        <Route
          path="active"
          element={<ActivePage extensionList={extensionList} />}
        ></Route>
        <Route
          path="inactive"
          element={<InactivePage extensionList={extensionList} />}
        ></Route>
      </Routes>
    </>
  );
}

export default ExtentionCard;
