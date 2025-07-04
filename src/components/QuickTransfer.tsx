import { useState } from 'react';

import { Button } from './elements/Button';
import Avatar from './elements/Avatar';
import { teamMembers } from '../utils/constants';

import { ReactComponent as ArrowNext } from '../assets/icons/arrow-next.svg';
import { ReactComponent as SendIcon } from '../assets/icons/send-icon.svg';

const QuickTransfer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [amount, setAmount] = useState('525.50');
  const [, setIsAnimating] = useState(false);

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
              <Avatar alt={member.name} size="xl" src={member.avatar} />
            </div>
            <div className="text-center mt-2">
              <h3 className="text-sm font-semibold">{member.name}</h3>
              <p className="text-sm text-secondary">{member.role}</p>
            </div>
          </div>
        ))}
        <button
          onClick={handleNext}
          className="absolute right-2 top-36 sm:top-12 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 text-2xl rounded-full p-1 shadow-md hover:bg-gray-50">
          <ArrowNext />
        </button>
      </div>

      <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 justify-between items-center space-x-2">
        <label className="text-secondary px-2 w-fit">Write Amount</label>
        <div className="relative flex flex-1">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-10 xs:px-4 py-3 bg-[#EDF1F7] rounded-full text-lg focus:outline-none"
            placeholder="Enter Amount"
          />
          <Button
            className="absolute right-0 w-[125px] font-semibold rounded-full"
            variant={'default'}>
            <span>Send</span>
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
