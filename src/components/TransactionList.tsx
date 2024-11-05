import { transactions } from '../utils/constants';

const TransactionList = () => {
  return (
    <div
      className="bg-white rounded-3xl shadow-sm p-2.5 h-[265px] overflow-y-auto
     [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-200
  [&::-webkit-scrollbar-thumb]:bg-primary
    ">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-3.5 lg:p-4 bg-white rounded-3xl">
          <div className="flex items-center gap-4">
            {<transaction.icon />}
            <div>
              <p className="font-medium text-gray-800">{transaction.name}</p>
              <p className="text-sm text-secondary">{transaction.date}</p>
            </div>
          </div>
          <span
            className={`font-medium ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {transaction.amount > 0 ? '+' : ''}
            {transaction.amount}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
