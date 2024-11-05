import React from 'react';
import DepositCard from '../assets/icons/deposit-card.svg';
import DepositPaypal from '../assets/icons/deposit-paypal.svg';
import Currency from '../assets/icons/currency.svg';

const transactions = [
  {
    id: 1,
    name: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    icon: DepositCard
  },
  {
    id: 2,
    name: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    icon: DepositPaypal
  },
  {
    id: 3,
    name: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    icon: Currency
  }
];

export default function TransactionList() {
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
}
