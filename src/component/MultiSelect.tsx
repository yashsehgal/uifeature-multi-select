import React from 'react';

interface MultiSelectProps {
  children: React.ReactNode
};

export const MultiSelect: React.ForwardRefRenderFunction<React.ComponentProps<MultiSelectProps>> = ({ children }) => {
  return (
    <div className="multi-select-container">
      {children ? children : <React.Fragment></React.Fragment>}
    </div>
  )
}