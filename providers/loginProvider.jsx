import { createContext, useState } from "react";

const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [otpSentRes, setOtpSentRes] = useState(null);

  return (
    <LoginContext.Provider value={{ otpSentRes, setOtpSentRes }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
