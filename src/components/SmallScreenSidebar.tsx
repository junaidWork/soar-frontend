import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from '@headlessui/react';
import Cross from '../assets/icons/cross.svg';
import Document from '../assets/icons/task-fill.svg';
import { sideBarMenuItems } from '../utils/contants';

export default function SmallScreenSidebar({
  sidebarOpen,
  setSidebarOpen
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
          <TransitionChild>
            <div className="absolute right-0 top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
              <button type="button" onClick={() => setSidebarOpen(false)} className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                <img src={Cross} alt="Cross" className="w-8 h-8" />
              </button>
            </div>
          </TransitionChild>
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div className="flex items-center justify-start gap-2 h-[75px]">
              <img src={Document} alt="Document" />
              <span className="text-xl font-bold text-gray-800">Soar Task</span>
            </div>
            <nav className="flex flex-1 flex-col">
              {sideBarMenuItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-3 cursor-pointer mb-2 ${
                    item.active
                      ? 'text-black border-l-[6px] border-black'
                      : 'text-secondary hover:bg-gray-50'
                  }`}>
                  <div className="flex items-start justify-start gap-3 w-full">
                    <img src={item.icon} alt={item.text} />
                    <span className="font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
