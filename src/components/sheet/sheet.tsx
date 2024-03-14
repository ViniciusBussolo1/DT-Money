import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'

import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { NewTransactionContext } from '@/context/new-transaction-context'
import { useContext } from 'react'

export function SheetComponent() {
  const { setTransactions, transactions } = useContext(NewTransactionContext)

  const schemaForm = z.object({
    descricao: z.string().nonempty('Informe a descrição'),
    preco: z.string().nonempty('Informe o preço'),
    categoria: z.string().nonempty('Informe a categoria'),
    tipo: z.enum(['entrada', 'saida'], {
      required_error: 'Selecione um tipo.',
    }),
  })

  const form = useForm<z.infer<typeof schemaForm>>({
    resolver: zodResolver(schemaForm),
  })

  type FormProps = z.infer<typeof schemaForm>

  const handleSubmitForm = (props: FormProps) => {
    const data = { ...props, date: new Date() }

    const TransactionsArray = [...transactions, data]
    setTransactions(TransactionsArray)

    localStorage.setItem('transaction', JSON.stringify(TransactionsArray))
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Nova Transação</SheetTitle>
      </SheetHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-3 mt-4"
        >
          <Input
            type="text"
            placeholder="Descrição"
            {...form.register('descricao')}
          />
          {form.formState.errors.descricao && (
            <span className="text-sm text-red-500">
              {form.formState.errors.descricao?.message}
            </span>
          )}

          <Input
            type="number"
            placeholder="Preço"
            {...form.register('preco')}
          />
          {form.formState.errors.preco && (
            <span className="text-sm text-red-500">
              {form.formState.errors.preco?.message}
            </span>
          )}

          <Input
            type="text"
            placeholder="Categoria"
            {...form.register('categoria')}
          />
          {form.formState.errors.categoria && (
            <span className="text-sm text-red-500">
              {form.formState.errors.categoria?.message}
            </span>
          )}

          <FormField
            control={form.control}
            name="tipo"
            render={({ field }) => (
              <FormItem className="flex space-y-3 mt-3">
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center space-x-2"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="entrada" />
                      </FormControl>
                      <FormLabel className="font-normal">Entrada</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="saida" />
                      </FormControl>
                      <FormLabel className="font-normal">Saida</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          {form.formState.errors.tipo && (
            <span className="text-sm text-red-500">
              {form.formState.errors.tipo?.message}
            </span>
          )}
          <Button type="submit" variant={'secondary'} className="mt-4">
            Cadastrar
          </Button>
        </form>
      </Form>
    </SheetContent>
  )
}
