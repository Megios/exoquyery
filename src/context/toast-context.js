import React, { useState } from 'react';

const ToastContext = React.createContext(null);

const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={useState(null)}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error('ToastContext must be used within a ToastsProvider');
  };

  return context;
};

export { ToastProvider, useToast };