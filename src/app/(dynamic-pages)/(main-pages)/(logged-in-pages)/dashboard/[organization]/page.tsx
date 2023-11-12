import {PieChart} from '@/components/ui/Chart';
import {H2} from '@/components/ui/Typography/H2';

export default function Dashboard() {
  return (
    <>
      <div className="w-3/4 mx-auto">
        <br/>
        Main ddaahsboard heree shownibg some emeetrics and useeful insights.
        <br/>
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
                      '#9f1239',
                      '#f59e0b',
                    ],
                    hoverBackgroundColor: [
                      '#9f1239',
                      '#f59e0b',
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
