import React from 'react';
import './App.css';
import Forum from './Forum';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Forum />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default App;
