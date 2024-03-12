import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface newTransactionProps {
  descricao: string
  preco: string
  categoria: string
  tipo: string
}

interface NewTransactionContextDataProps {
  newTransaction: newTransactionProps
  setNewTransaction: Dispatch<SetStateAction<newTransactionProps>>
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
  const [newTransaction, setNewTransaction] = useState(
    {} as newTransactionProps,
  )

  return (
    <NewTransactionContext.Provider
      value={{
        newTransaction,
        setNewTransaction,
      }}
    >
      {children}
    </NewTransactionContext.Provider>
  )
}
