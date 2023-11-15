import { BarChart, LineChart, PieChart } from '@/components/ui/Chart';
import { H4 } from '@/components/ui/Typography/H4';
import React from 'react';
import { H1 } from '@/components/ui/Typography/H1';

export default function Dashboard() {
  return (
    <>
      <div className="w-3/4 mx-auto pb-8">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4 mt-12">
          <div className="col-span-12 lg:col-span-4 p-2 bg-neutral-100 dark:bg-neutral-900 shadow rounded-2xl">
            <H4 className="mx-4">Player Info</H4>
            <div className="grid grid-cols-2 gap-4 my-auto mt-2">
              <div className="bg-rose-800 p-2 text-white text-center font-extrabold rounded-lg">
                <span className="text-xs tracking-widest uppercase">
                  Current
                </span>
                <H1>65</H1>
              </div>

              <div className="bg-amber-500 p-2 text-white text-center font-extrabold rounded-lg">
                <span className="text-xs tracking-widest uppercase">
                  Todays Peek
                </span>
                <H1>200</H1>
              </div>
              <div className="bg-amber-500 p-2 text-white text-center font-extrabold rounded-lg">
                <span className="text-xs tracking-widest uppercase">
                  Average Session
                </span>
                <H1>1h45m</H1>
              </div>

              <div className="bg-rose-800 p-2 text-white text-center font-extrabold rounded-lg">
                <span className="text-xs tracking-widest uppercase">
                  All time peek
                </span>
                <H1>5832</H1>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 p-2 bg-neutral-100 dark:bg-neutral-900 shadow rounded-2xl">
            <H4 className="mx-4">Players split by Template</H4>
            <BarChart
              data={{
                labels: ['Lobby', 'Skyblock', 'Dev', 'Gens'],
                datasets: [
                  {
                    data: [45, 20, 15, 25],
                    backgroundColor: ['#9f1239', '#f59e0b'],
                    hoverBackgroundColor: ['#9f1239', '#f59e0b'],
                    borderRadius: 8,
                  },
                ],
              }}
            />
          </div>
          <div className="col-span-12 lg:col-span-3 p-2 bg-neutral-100 dark:bg-neutral-900 shadow rounded-2xl">
            <H4 className="mx-4">Moderation stats</H4>
            <BarChart
              index={'y'}
              data={{
                labels: ['Bans', 'Mutes', 'Warns', 'Kicks'],
                datasets: [
                  {
                    data: [45, 24, 55, 125],
                    backgroundColor: ['#9f1239', '#f59e0b'],
                    hoverBackgroundColor: ['#9f1239', '#f59e0b'],
                    borderRadius: 8,
                  },
                ],
              }}
            />
          </div>
          <div className="col-span-12 lg:col-span-9 p-2 bg-neutral-100 dark:bg-neutral-900 shadow rounded-2xl">
            <H4 className="mx-4">Historical Players</H4>
            <LineChart
              data={{
                labels: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
                datasets: [
                  {
                    axis: 'y',
                    fill: true,
                    data: [
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      null,
                      5,
                      20,
                      15,
                      25,
                    ],
                    backgroundColor: ['#9f1239', '#f59e0b'],
                    hoverBackgroundColor: ['#9f1239', '#f59e0b'],
                    pointRadius: 12,
                    pointHoverRadius: 16,
                  },
                ],
              }}
            />
          </div>

          <div className="col-span-12 lg:col-span-3 p-2 bg-neutral-100 dark:bg-neutral-900 shadow rounded-2xl">
            <H4 className="ml-2">Available memory</H4>
            <PieChart
              data={{
                labels: ['Used', 'Free'],
                datasets: [
                  {
                    data: [90, 25],
                    backgroundColor: ['#9f1239', '#f59e0b'],
                    hoverBackgroundColor: ['#9f1239', '#f59e0b'],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
