import { useEffect } from "react";
import EntryFrom from "../components/EntryFrom";
import SoledInYear from "../components/SoledInYear";
import Statistics from "../components/Statistics";
import ViewToDay from "../components/ViewToDay";
import "./pages style/Statistic.css"

function SalesStatistic() {
  useEffect(() => {
    document.title = "Panel Admin - Statistic";
  }, []);

  return (
    <>
      <div className="statistic">
        <div className="statistic-section">
          <h1>Statistic</h1>
          <div className="statistic-grid">
            <ViewToDay />
            <SoledInYear />
            <Statistics />
            <EntryFrom />
          </div>
        </div>
      </div>
    </>
  );
}

export default SalesStatistic;
