import Image from 'next/image'

import IgniteSimbol from '../../../public/ignite-simbol.svg'
import IconSaida from '../../../public/icon-saida.svg'
import IconEntrada from '../../../public/incon-entrada.svg'

import { Button } from '../ui/button'
import { Input } from '../ui/input'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={IgniteSimbol} alt="Imagem do símbolo do Ignite" />
        <h1 className="text-gray7 text-2xl font-bold">DT Money</h1>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={'lg'} variant={'outline'}>
            Nova transação
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Nova Transação</SheetTitle>
          </SheetHeader>
          <form className="flex flex-col gap-3 mt-4">
            <Input type="text" placeholder="Descrição" />
            <Input type="number" placeholder="Preço" />
            <Input type="text" placeholder="Categoria" />

            <div className="w-full flex items-center gap-4 mt-3">
              <Button
                size={'lg'}
                variant={'outline'}
                className="flex items-center gap-2 flex-1"
              >
                <Image
                  src={IconEntrada}
                  alt="Icone de entrada"
                  className="size-6"
                />
                Entrada
              </Button>
              <Button
                size={'lg'}
                variant={'outline'}
                className="flex items-center gap-2 flex-1"
              >
                <Image
                  src={IconSaida}
                  alt="Icone de saída"
                  className="size-6"
                />
                Saída
              </Button>
            </div>
            <Button type="submit" variant={'secondary'} className="mt-4">
              Cadastrar
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </header>
  )
}
