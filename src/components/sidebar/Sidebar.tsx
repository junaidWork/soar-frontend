import { sideBarMenuItems } from '../../utils/constants';
import Document from '../../assets/icons/task-fill.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-white min-h-screen relative transition-all duration-300 ease-in-out border-r border-gray-200">
      <div className="flex items-center justify-center gap-2 h-[100px]">
        <img src={Document} alt="Document" />
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
              <img src={item.icon} alt={item.text} />
              <span className="font-medium">{item.text}</span>
            </div>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
