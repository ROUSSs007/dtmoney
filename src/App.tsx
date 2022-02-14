import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { Header } from "./components/Header";
import { useState } from "react";
import NewTransactionModal from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactioModalOpen, setIsNewTransactioModalOpen] = useState (false);

  function handleOpenNewTransactioModal() {
      setIsNewTransactioModalOpen(true);
  }

  function handleCloseNewTransactioModal() {
      setIsNewTransactioModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactioModal}/>

      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isNewTransactioModalOpen} 
        onRequestClose={handleCloseNewTransactioModal} 
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}