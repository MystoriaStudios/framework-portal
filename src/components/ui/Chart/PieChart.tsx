'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export const PieChart = props => {
  return (
    <div>
      <Doughnut {...props} />
    </div>
  );
};

export default PieChart;
