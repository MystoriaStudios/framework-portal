'use client';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels,
  CategoryScale,
  LinearScale
);

export const BarChart = (props) => {
  return (
    <div className={'mt-4'}>
      <Bar
        className={'tracking-widest h-fit relative bottom-0'}
        {...props}
        options={{
          indexAxis: props.index || 'x',
          maintainAspectRatio: false,
          responsive: true,
          borderColor: 'transparent',
          plugins: {
            datalabels: {
              color: '#fff',
              font: {
                family: 'MonaspaceKrypton',
                weight: 800,
                size: 20,
              },
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
