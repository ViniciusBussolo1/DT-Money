'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface TransactionProps {
  id: string
  descricao: string
  preco: string
  categoria: string
  tipo: 'entrada' | 'saida'
  date: Date
}

interface NewTransactionContextDataProps {
  transactions: Array<TransactionProps>
  setTransactions: Dispatch<SetStateAction<TransactionProps[]>>
  handleDeleteTransaction: (id: string) => void
}

interface NewTransaionContextProvidersProps {
  children: ReactNode
}

export const NewTransactionContext = createContext(
  {} as NewTransactionContextDataProps,
)

export function NewTransactionContextProvider({
  children,
}: NewTransaionContextProvidersProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>(() => {
    const transactionOnStorage = localStorage.getItem('transaction')

    if (transactionOnStorage) {
      return JSON.parse(transactionOnStorage)
    }

    return []
  })

  const handleDeleteTransaction = (id: string) => {
    const newArrayTransaction = transactions.filter(
      (transaction) => transaction.id !== id,
    )

    setTransactions(newArrayTransaction)
  }

  return (
    <NewTransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        handleDeleteTransaction,
      }}
    >
      {children}
    </NewTransactionContext.Provider>
  )
}
