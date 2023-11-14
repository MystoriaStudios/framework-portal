'use client';
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  CategoryScale,
  LinearScale
);

export const LineChart = (props) => {
  return (
    <div className={'mt-4'}>
      <Line
        className={'tracking-widest h-fit relative bottom-0'}
        {...props}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            datalabels: {
              color: '#fff',
              font: {
                family: 'MonaspaceKrypton',
                weight: 800,
                size: 16,
              },
            },
            legend: {
              display: false,
            },
          },
          indexAxis: 'x',
          scales: {
            x: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
