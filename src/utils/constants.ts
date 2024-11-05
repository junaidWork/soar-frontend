import Home from '../assets/icons/home.svg';
import Transactions from '../assets/icons/Glyph.svg';
import User from '../assets/icons/user.svg';
import Investments from '../assets/icons/investment.svg';
import CreditCards from '../assets/icons/credit-card.svg';
import Loans from '../assets/icons/loan.svg';
import Services from '../assets/icons/service.svg';
import Setting from '../assets/icons/settings.svg';
import Privileges from '../assets/icons/privilege.svg';
import DepositCard from '../assets/icons/deposit-card.svg';
import DepositPaypal from '../assets/icons/deposit-paypal.svg';
import Currency from '../assets/icons/currency.svg';

export const sideBarMenuItems = [
  { icon: Home, text: 'Dashboard', path: '/' },
  { icon: Transactions, text: 'Transactions', path: '/transactions' },
  { icon: User, text: 'Accounts', path: '/accounts' },
  { icon: Investments, text: 'Investments', path: '/investments' },
  { icon: CreditCards, text: 'Credit Cards', path: '/credit-cards' },
  { icon: Loans, text: 'Loans', path: '/loans' },
  { icon: Services, text: 'Services', path: '/services' },
  { icon: Privileges, text: 'My Privileges', path: '/privileges' },
  { icon: Setting, text: 'Setting', path: '/settings' }
];

export const transactions = [
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

export const teamMembers = [
  {
    id: 1,
    name: 'Livia Bator',
    role: 'CEO',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 2,
    name: 'Randy Press',
    role: 'Director',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 3,
    name: 'Workman',
    role: 'Designer',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 4,
    name: 'Workman',
    role: 'Designer',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
  }
];
