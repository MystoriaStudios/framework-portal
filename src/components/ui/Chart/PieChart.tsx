'use client';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const PieChart = (props) => {
  return (
    <div className={'mt-4'}>
      <Pie
        className={'tracking-widest h-fit relative bottom-0'}
        {...props}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          borderColor: 'transparent',
          plugins: {
            tooltips: {
              enabled: false,
            },
            datalabels: {
              formatter: (value, ctx) => {
                const datapoints = ctx.chart.data.datasets[0].data;
                const total = Number.parseInt(
                  datapoints
                    .reduce(
                      (total: number, datapoint: number) => total + datapoint,
                      0
                    )
                    .toString()
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
                font: {
                  family: 'MonaspaceKrypton',
                  weight: 800,
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
