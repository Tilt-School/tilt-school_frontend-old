import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from 'src/store/index';

const store = setupStore();

export const StoreProvider: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};
