import React, { useState } from 'react';

import ArrowNext from '../assets/icons/arrow-next.svg';
import SendIcon from '../assets/icons/send-icon.svg';

const teamMembers = [
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

const QuickTransfer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [amount, setAmount] = useState('525.50');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="mx-auto">
      <div className="flex items-center justify-center gap-4 mb-20 relative">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={`transition-all duration-300 ${
              index === activeIndex
                ? 'opacity-100 transform scale-100'
                : 'opacity-40 transform scale-90'
            }`}>
            <div className="relative">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>
            <div className="text-center mt-2">
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-sm text-secondary">{member.role}</p>
            </div>
          </div>
        ))}
        <button
          onClick={handleNext}
          className="absolute right-2 top-12 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 text-2xl rounded-full p-1 shadow-md hover:bg-gray-50">
          <img src={ArrowNext} alt="ArrowNext" />
        </button>
      </div>

      <div className="flex justify-between items-center space-x-2">
        <label className="text-secondary px-2 w-fit">Write Amount</label>
        <div className="relative flex flex-1">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 bg-[#EDF1F7] rounded-full text-lg"
            placeholder="Write Amount"
          />
          <button className="absolute right-0 w-[125px] bg-black text-white rounded-full py-3.5 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            <span>Send</span>
            <img src={SendIcon} alt="SendIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
