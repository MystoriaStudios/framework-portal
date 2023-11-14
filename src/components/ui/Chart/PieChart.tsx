'use client';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const PieChart = (props) => {
  return (
    <div className={'mt-4'}>
      <Pie
        className={'tracking-widest'}
        {...props}
        options={{
          responsive: true,
          borderColor: 'transparent',
          plugins: {
            tooltips: {
              enabled: false,
            },
            datalabels: {
              formatter: (value, ctx) => {
                const datapoints = ctx.chart.data.datasets[0].data;
                const total = datapoints.reduce(
                  (total, datapoint) => total + datapoint,
                  0
                );
                const percentage = (value / total) * 100;
                return percentage.toFixed(2).split('.')[0] + '%';
              },
              color: '#fff',
              font: {
                family: 'MonaspaceKrypton',
                weight: 800,
                size: 20,
              },
            },
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 12,
                pointStyle: 'circle',
                usePointStyle: true,
                padding: 20,
                color: '#fff',
                font: {
                  family: 'MonaspaceKrypton',
                  weight: 800,
                },
              },
            },
            maintainAspectRatio: false,
            responsive: true,
          },
        }}
      />
    </div>
  );
};

export default PieChart;
