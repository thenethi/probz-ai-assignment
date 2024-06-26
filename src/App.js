import React, { useState, useEffect } from 'react';
import ChartComponent from './components/ChartComponent/ChartComponent';
import TimeframeSelector from './components/TimeframeSelector/TimeframeSelector';
// import './styles/ChartComponent.css';

function App() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState('daily');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const filterDataByTimeframe = (data, timeframe) => {
    // Implement filtering logic here based on the selected timeframe (daily, weekly, monthly)
    return data;
  };

  const filteredData = filterDataByTimeframe(data, timeframe);

  return (
    <div className="App">
      <h1>Charts</h1>
      <TimeframeSelector onSelect={setTimeframe} />
      <div className="chart-container">
        <ChartComponent data={filteredData} />
      </div>
    </div>
  );
}

export default App;
