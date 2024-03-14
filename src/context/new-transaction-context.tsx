'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface TransactionProps {
  descricao: string
  preco: string
  categoria: string
  tipo: 'entrada' | 'saida'
  date: Date
}

interface NewTransactionContextDataProps {
  transactions: Array<TransactionProps>
  setTransactions: Dispatch<SetStateAction<TransactionProps[]>>
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

  return (
    <NewTransactionContext.Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </NewTransactionContext.Provider>
  )
}
