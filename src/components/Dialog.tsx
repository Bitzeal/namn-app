import React, { ReactNode } from 'react';

interface DialogProps {
  title: string;
  width: string;
  children: ReactNode;
  className?: string;
}

const Dialog: React.FC<DialogProps> = ({ title, width, children, className = '' }) => {
  return (
    <div className={`${width} border-[0.2em] border-text rounded-[0.25em] p-[1em] mt-[0.5em] relative flex flex-col min-h-0 ${className}`}>
      <p className="text-secondary bg-background whitespace-nowrap select-none px-[1em] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {title}
      </p>
      <div className="mt-[1em] flex-1 overflow-hidden min-h-0">
        {children}
      </div>
    </div>
  );
};

export default Dialog;
