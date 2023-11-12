import Link from 'next/link';
import {PieChart} from '@/components/ui/Chart';
import {H2} from '@/components/ui/Typography/H2';

export default function Dashboard() {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <br/>
        Main ddaahsboard heree shownibg some emeetrics and useeful insights.
        <br/>
        <Link href="/dashboard/nodes">click to go to the nodes overview</Link>
        <div className="grid grid-cols-4 gap-x-12 mt-12">
          <div className="p-2 text-center">
            <H2>Players</H2>
            <PieChart
              data={{
                labels: ['Bedrock Edition', 'Java Edition'],
                datasets: [
                  {
                    data: [25, 20],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.7)',
                      'rgba(54, 162, 235, 0.7)',
                    ],
                    hoverBackgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                    ],
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
