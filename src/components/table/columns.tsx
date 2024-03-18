'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '../ui/checkbox'

import { format } from 'date-fns'
import { ArrowUpDown } from 'lucide-react'
import { Button } from '../ui/button'

import { DropDownMenuDelete } from '../drop-down-menu-delete/drop-down'

export type TableItemsProps = {
  id: string
  descricao: string
  preco: string
  categoria: string
  tipo: 'entrada' | 'saida'
  date: Date
}

export const columns: ColumnDef<TableItemsProps>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'descricao',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Descrição
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: 'preco',
    header: 'Preço',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('preco'))

      const formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(amount)

      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    accessorKey: 'categoria',
    header: 'Categoria',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('categoria')}</div>
    ),
  },
  {
    accessorKey: 'tipo',
    header: 'Tipo',
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue('tipo')}</div>
    ),
  },
  {
    accessorKey: 'date',
    header: 'Data',
    cell: ({ row }) => {
      const formattedDate = format(row.getValue('date'), 'dd/MM/yyyy')

      return <div>{formattedDate}</div>
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const transaction = row.original
      return <DropDownMenuDelete id={transaction.id} />
    },
  },
]
