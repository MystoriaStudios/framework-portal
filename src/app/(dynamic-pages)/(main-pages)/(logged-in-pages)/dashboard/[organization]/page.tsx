import {PieChart} from '@/components/ui/Chart';
import {H2} from '@/components/ui/Typography/H2';
import {H4} from "@/components/ui/Typography/H4";

export default function Dashboard() {
  return (
    <>
      <div className="w-2/3 mx-auto">
        <br />
        Main ddaahsboard heree shownibg some emeetrics and useeful insights.
        <br />
        <div className="grid grid-cols-12 gap-x-12 mt-12">
          <div className="col-span-3 p-2 w-3/4 bg-neutral-100 dark:bg-neutral-900 shadow rounded-2xl">
            <H4 className="mx-4">Players</H4>
            <PieChart
              data={{
                labels: ['Bedrock', 'Java'],
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
