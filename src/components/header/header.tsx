'use client'

import Image from 'next/image'

import IgniteSimbol from '../../../public/ignite-simbol.svg'

import { Button } from '../ui/button'

import { Sheet, SheetTrigger } from '../ui/sheet'
import { SheetComponent } from '../sheet/sheet'

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

        <SheetComponent />
      </Sheet>
    </header>
  )
}
