import React, { useState, createContext, useEffect, ReactNode } from "react";
import { Alert, AlertTitle, Grow, AlertColor, Typography } from "@mui/material";
import { AlertContainer } from "./AlertProvider.styles";

interface IAlertContext {
  showAlert: (message: string, severity?: AlertColor) => void;
}

export const AlertContext = createContext<IAlertContext>({ showAlert: () => {} });

interface AlertProviderProps {
  children: ReactNode;
}

const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  const showAlert = (message: string, severity: AlertColor = "success") => {
    setMessage(message);
    setSeverity(severity);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => {
        handleClose();
      }, 7000);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <AlertContainer>
        <Grow in={isOpen}>
          <Alert onClose={handleClose} severity={severity}>
            <AlertTitle>
              <Typography variant="h4">
                {severity.toUpperCase()[0] + severity.slice(1, severity.length)}
              </Typography>
            </AlertTitle>
            <Typography variant="subtitle2">{message}</Typography>
          </Alert>
        </Grow>
      </AlertContainer>
    </AlertContext.Provider>
  );
};

export default AlertProvider;
