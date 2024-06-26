import React, { useEffect, useState, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Brush, ResponsiveContainer } from 'recharts';
import html2canvas from 'html2canvas';
import ModalComponent from '../ModalComponent/ModalComponent';

const ChartComponent = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [selectedData, setSelectedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleClick = (e) => {
    if (e.activePayload && e.activePayload.length > 0) {
      setSelectedData(e.activePayload[0].payload);
      setIsModalOpen(true);
    }
  };

  const handleExport = async () => {
    if (chartContainerRef.current) {
      const canvas = await html2canvas(chartContainerRef.current);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'chart.png';
      link.click();
    }
  };

  return (
    <div>
      <div ref={chartContainerRef}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={filteredData} onClick={handleClick}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="value" stroke="#ff7300" />
            <Brush />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <button onClick={handleExport}>Export as PNG</button>
      <ModalComponent isOpen={isModalOpen} data={selectedData} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ChartComponent;
