import React, { useState } from 'react';
import Toast from '../Forum/Toast';

const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);
  return (
    <ToastContext.Provider value={{
      toast,
      setToast: (toast) => setToast(toast)
    }}>
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