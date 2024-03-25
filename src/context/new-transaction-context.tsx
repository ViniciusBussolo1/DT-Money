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

export interface TransactionContextDataProps {
  transactions: Array<TransactionProps>
  setTransactions: Dispatch<SetStateAction<TransactionProps[]>>
  handleDeleteTransaction: (id: string) => void
}

interface TransaionContextProvidersProps {
  children: ReactNode
}

export const TransactionContext = createContext(
  {} as TransactionContextDataProps,
)

export function TransactionContextProvider({
  children,
}: TransaionContextProvidersProps) {
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
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions,
        handleDeleteTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
