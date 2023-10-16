import React from "react";
interface Props {
  open: boolean;
  children: React.ReactNode;
}
const CustomSheet = ({ open, children }: Props) => {
  return (
    <div
      className={
        open
          ? "fixed inset-0 z-50 ease-in duration-300 font-epilogue animate-openmenu top-0 inset-x-0"
          : "ease-in duration-300 animate-closemenu top-[-500px] fixed z-50 inset-x-0"
      }
    >
      <div className="border-b bg-background/80 backdrop-blur-lg gap-4 p-6 shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default CustomSheet;