import Search from '../assets/icons/magnifying-glass.svg';
import Settings from '../assets/icons/settings-primary.svg';
import Bell from '../assets/icons/notification.svg';
import Hamburger from '../assets/icons/hamburger.svg';
import { Link } from 'react-router-dom';
import HeaderMenu from './elements/HeaderMenu';

const Header = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void }) => {
  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4 h-[130px] sm:h-[100px] flex flex-col">
      <div className="flex justify-between items-center">
        <button onClick={() => setSidebarOpen(true)} className="block md:hidden">
          <img src={Hamburger} alt="Hamburger" />
        </button>
        <h1 className="text-2xl font-semibold text-primary">Overview</h1>
        <div className="flex items-center gap-6">
          <div className="relative hidden lg:block">
            <img
              src={Search}
              alt="Search"
              className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search for something"
              className="pl-10 pr-4 py-2 bg-[#F5F7FA] placeholder:text-secondary h-[50px] rounded-[40px] border-none focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/settings"
              className="hidden md:flex justify-center items-center bg-[#F5F7FA] rounded-full w-11 h-11">
              <img src={Settings} alt="Settings" />
            </Link>
            <button className="hidden md:flex justify-center items-center bg-[#F5F7FA] rounded-full w-11 h-11">
              <img src={Bell} alt="Bell" />
            </button>
            <HeaderMenu />
          </div>
        </div>
      </div>
      <div className="relative block sm:hidden mt-1">
        <img
          src={Search}
          alt="Search"
          className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search for something"
          className="w-full pl-10 pr-4 py-2 bg-[#F5F7FA] placeholder:text-secondary h-[50px] rounded-[40px] border-none focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
