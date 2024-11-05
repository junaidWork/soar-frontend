import { sideBarMenuItems } from '../../utils/constants';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as Document } from '../../assets/icons/task-fill.svg';

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <aside className="hidden md:block w-64 bg-white min-h-screen relative transition-all duration-300 ease-in-out border-r border-gray-200">
      <div className="flex items-center justify-center gap-2 h-[100px]">
        <Document />
        <span className="text-xl font-bold text-gray-800">Soar Task</span>
      </div>
      <nav>
        {sideBarMenuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 cursor-pointer mb-2 ${
                isActive
                  ? 'text-black border-l-[6px] border-black'
                  : 'text-light_gray hover:bg-gray-50'
              }`
            }>
            <div className="flex items-start justify-start gap-3 w-full ml-12">
              <item.icon fill={pathname === item.path ? 'black' : '#B1B1B1'} />
              <span className="font-medium">{item.text}</span>
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
