import React from 'react';
import { cn } from '../../utils/helpers';

export interface AvatarProps {
  src: string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, className, size = 'md' }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'rounded-full',
        {
          'h-6 w-6': size === 'sm',
          'h-10 w-10': size === 'md',
          'h-12 w-12': size === 'lg',
          'h-14 w-14': size === 'xl'
        },
        className
      )}
    />
  );
};

export default Avatar;
