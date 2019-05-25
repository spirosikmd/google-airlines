import React, { AnchorHTMLAttributes } from 'react';

const Anchor = ({ children, ...props }: AnchorHTMLAttributes<{}>) => {
  return (
    <a
      target="_blank"
      className="text-purple-600 underline cursor-pointer"
      {...props}
    >
      {children}
    </a>
  );
};

export default Anchor;
