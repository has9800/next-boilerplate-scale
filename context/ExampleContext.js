import { createContext, useContext, useState } from 'react';

const ExampleContext = createContext();

const ExampleContextWrapper = ({ children }) => {
  const [foo, setFoo] = useState('Example context state value');

  return (
    <ExampleContext.Provider
      value={{
        foo,
        setFoo,
      }}
    >
      {children}
    </ExampleContext.Provider>
  );
};

export default ExampleContextWrapper;
export const useExampleContext = () => useContext(ExampleContext);
