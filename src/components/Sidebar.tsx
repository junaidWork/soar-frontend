import Document from '../assets/icons/task-fill.svg';
import { sideBarMenuItems } from '../utils/contants';

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-white min-h-screen relative transition-all duration-300 ease-in-out border-r border-gray-200">
      <div className="flex items-center justify-center gap-2 h-[100px]">
        <img src={Document} alt="Document" />
        <span className="text-xl font-bold text-gray-800">Soar Task</span>
      </div>
      <nav>
        {sideBarMenuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-3 cursor-pointer mb-2 ${
              item.active
                ? 'text-black border-l-[6px] border-black'
                : 'text-secondary hover:bg-gray-50'
            }`}>
            <div className="flex items-start justify-start gap-3 w-full ml-12">
              <img src={item.icon} alt={item.text} />
              <span className="font-medium">{item.text}</span>
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
