import React from "react";
// this is server component. you could use `metadata` as well
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <title>GRS Quadros - Área do Cliente</title>
      {children}
    </div>
  );
};

export default layout;