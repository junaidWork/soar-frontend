import React from 'react';
import LightChipIcon from '../assets/icons/white_Chip_Card.svg';
import DarkChipIcon from '../assets/icons/dark_Chip_Card.svg';
import LightTwoCircles from '../assets/icons/light_circle.svg';
import DarkTwoCircles from '../assets/icons/dark_circle.svg';

interface CardProps {
  name: string;
  number: string;
  expiry: string;
  balance: string;
  dark?: boolean;
}

export default function Card({ name, number, expiry, balance, dark = false }: CardProps) {
  return (
    <div
      className={`rounded-3xl w-full h-[265px] ${dark ? 'bg-linear-gradient-primary' : 'bg-white border'} flex flex-col justify-between`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className={`text-sm ${dark ? 'text-white' : 'text-gray-500'}`}>Balance</p>
            <p className={`text-2xl font-bold ${dark ? 'text-white' : 'text-gray-800'}`}>
              ${balance}
            </p>
          </div>
          <div>
            <img src={dark ? LightChipIcon : DarkChipIcon} alt="chip icon" className="w-10 h-10" />
          </div>
        </div>

        <div className="flex justify-between w-10/12">
          <div>
            <p className={`text-xs ${dark ? 'text-gray-400' : 'text-secondary'}`}>CARD HOLDER</p>
            <p className={`font-medium ${dark ? 'text-white' : 'text-primary'}`}>{name}</p>
          </div>
          <div>
            <p className={`text-xs ${dark ? 'text-gray-400' : 'text-secondary'}`}>VALID THRU</p>
            <p className={`font-medium ${dark ? 'text-white' : 'text-primary'}`}>{expiry}</p>
          </div>
        </div>
      </div>
      <div
        className={`flex justify-between items-center rounded-b-3xl p-6  ${dark ? 'bg-linear-gradient-secondary' : ' border-t border-t-gray-200'}`}>
        <p className={`text-2xl tracking-wider ${dark ? 'text-white' : 'text-gray-800'}`}>
          {number}
        </p>
        <img src={dark ? LightTwoCircles : DarkTwoCircles} alt="" />
      </div>
    </div>
  );
}
