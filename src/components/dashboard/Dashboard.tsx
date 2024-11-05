import Card from '../Card';
import TransactionList from '../TransactionList';
import { BalanceHistory, ExpenseStats, WeeklyActivity } from '../Charts';
import QuickTransfer from '../QuickTransfer';

const Dashboard = () => {
  return (
    <main className="flex-1 p-4 lg:p-8">
      {/* First Row: Cards and Recent Transactions */}
      <div className="grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-12 xl:col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="font-semibold text-primary text-xl mb-4">My Cards</div>
            <Card
              name="Kenneth Aladi"
              number="3778 **** **** 1234"
              expiry="12/22"
              balance="5,756"
              dark
            />
          </div>
          <div>
            <div className="flex justify-start lg:justify-end text-primary font-semibold text-lg mb-4">
              <span className="hover:underline cursor-pointer">See All</span>
            </div>
            <Card name="Eddy Cusuma" number="3778 **** **** 1234" expiry="12/22" balance="5,756" />
          </div>
        </div>
        <div className="lg:col-span-12 xl:col-span-4">
          <h2 className="text-xl font-semibold text-primary mb-4">Recent Transaction</h2>
          <TransactionList />
        </div>
      </div>

      {/* Second Row: Weekly Activity and Expense Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-12 gap-6 mb-6">
        <div className="lg:col-span-12 xl:col-span-8">
          <div className="font-semibold text-primary text-xl mb-4">Weekly Activity</div>
          <div className="bg-white p-4 lg:p-6 rounded-3xl shadow-sm">
            <WeeklyActivity />
          </div>
        </div>
        <div className="lg:col-span-12 xl:col-span-4">
          <h2 className="text-xl font-semibold text-primary mb-4">Expense Statistics</h2>
          <div className="bg-white p-4 lg:p-6 rounded-3xl shadow-sm">
            <ExpenseStats />
          </div>
        </div>
      </div>

      {/* Third Row: Quick Transfer and Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-12 xl:col-span-6 2xl:col-span-5">
          <div className="font-semibold text-primary text-xl mb-4">Quick Transfer</div>
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm h-[322px]">
            <QuickTransfer />
          </div>
        </div>
        <div className="lg:col-span-12 xl:col-span-6 2xl:col-span-7">
          <h2 className="text-xl font-semibold text-primary mb-4">Balance History</h2>
          <div className="bg-white p-4 lg:p-6 rounded-xl shadow-sm">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
