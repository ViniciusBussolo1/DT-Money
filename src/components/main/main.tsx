'use client'

import { TransactionContext } from '@/context/new-transaction-context'
import { useContext } from 'react'
import { CardItem } from '../card-item/card-item'
import { Header } from '../header/header'
import { columns } from '../table/columns'
import { DataTable } from '../table/data-table'

export function Main() {
  const { transactions } = useContext(TransactionContext)

  const TransactionSaida = transactions
    .filter((transaction) => transaction.tipo === 'saida')
    .reduce((acumulador, transaction) => {
      return acumulador + parseFloat(transaction.preco)
    }, 0)

  const TransactionEntrada = transactions
    .filter((transaction) => transaction.tipo === 'entrada')
    .reduce((acumulador, transaction) => {
      return acumulador + parseFloat(transaction.preco)
    }, 0)

  const Total = TransactionEntrada - TransactionSaida

  return (
    <main className="max-w-[70rem] w-full pt-12 px-2">
      <Header />
      <div className="w-full flex gap-6 mt-10">
        <CardItem
          title="Entradas"
          transacao="entrada"
          preco={TransactionEntrada}
        />
        <CardItem title="Saidas" transacao="saida" preco={TransactionSaida} />
        <CardItem title="Total" preco={Total} />
      </div>

      <DataTable columns={columns} data={transactions} />
    </main>
  )
}
