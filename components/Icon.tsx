import React from 'react';

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = "" }) => {
  return (
    <span className={`material-icons-round ${className} select-none`}>
      {name}
    </span>
  );
};