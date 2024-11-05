import { transactions } from '../utils/constants';

const TransactionList = () => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-2.5">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-3.5 lg:p-4 bg-white rounded-3xl">
          <div className="flex items-center gap-4">
            <img src={transaction.icon} alt={transaction.name} className="w-12 h-12" />
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
