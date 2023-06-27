import React from "react";

const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>This is Parent</h1>
      {children}
    </div>
  );
};

export default Parent;
