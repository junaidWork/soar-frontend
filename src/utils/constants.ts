import { ReactComponent as Home } from '../assets/icons/home.svg';
import { ReactComponent as Transactions } from '../assets/icons/Glyph.svg';
import { ReactComponent as User } from '../assets/icons/user.svg';
import { ReactComponent as Investments } from '../assets/icons/investment.svg';
import { ReactComponent as CreditCards } from '../assets/icons/credit-card.svg';
import { ReactComponent as Loans } from '../assets/icons/loan.svg';
import { ReactComponent as Services } from '../assets/icons/service.svg';
import { ReactComponent as Setting } from '../assets/icons/settings.svg';
import { ReactComponent as Privileges } from '../assets/icons/privilege.svg';
import { ReactComponent as DepositCard } from '../assets/icons/deposit-card.svg';
import { ReactComponent as DepositPaypal } from '../assets/icons/deposit-paypal.svg';
import { ReactComponent as Currency } from '../assets/icons/currency.svg';

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
  },
  {
    id: 4,
    name: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    icon: Currency
  }
];

export const userImageUrl =
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80';

export const teamMembers = [
  {
    id: 1,
    name: 'Livia Bator',
    role: 'CEO',
    avatar: userImageUrl
  },
  {
    id: 2,
    name: 'Randy Press',
    role: 'Director',
    avatar: userImageUrl
  },
  {
    id: 3,
    name: 'Workman',
    role: 'Designer',
    avatar: userImageUrl
  },
  {
    id: 4,
    name: 'Workman4',
    role: 'Frontend',
    avatar: userImageUrl
  }
];
