'use client'

import { NewTransactionContext } from '@/context/new-transaction-context'
import { useContext } from 'react'
import { CardItem } from '../card-item/card-item'
import { Header } from '../header/header'
import { columns } from '../table/columns'
import { DataTable } from '../table/data-table'

export function Main() {
  const { transactions } = useContext(NewTransactionContext)

  return (
    <main className="max-w-[70rem] w-full pt-12 px-2">
      <Header />
      <div className="w-full flex gap-6 mt-10">
        <CardItem title="Entradas" transacao="entrada" preco={17400} />
        <CardItem title="Saidas" transacao="saida" preco={1259} />
        <CardItem title="Total" preco={16141} />
      </div>

      <DataTable columns={columns} data={transactions} />
    </main>
  )
}
