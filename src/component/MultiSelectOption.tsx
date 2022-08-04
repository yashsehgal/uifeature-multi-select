import React, { useEffect, useState } from "react";

interface MultiSelectOptionsProps {
  isSelected: boolean,
  children: React.ReactNode,
  optionId: string
};

export const MultiSelectOption: React.FunctionComponent<React.ComponentProps<MultiSelectOptionsProps>> = ({
  isSelected=false,
  optionId,
  children
}) => {
  const [selectedRef, setSelected] = useState(selected);
  const [selectionStateStylingRef, setSelectionStateStyling] = useState(
    "px-4 py-1.5 bg-transparent hover:bg-white hover:bg-opacity-10 rounded-md text-sm font-semibold");
  
  useEffect(() => {
    selectedRef 
      ? setSelectionStateStyling("px-4 py-1.5 bg-blue-500 hover:bg-blue-600 hover:bg-opacity-10 text-white rounded-md text-sm font-semibold")
      : setSelectionStateStyling("px-4 py-1.5 bg-transparent hover:bg-white hover:bg-opacity-10 text-white rounded-md text-sm font-semibold")
  }, [selectedRef]);

  return (
    <button className={selectionStateStylingRef}>{children}</button>
  )
}