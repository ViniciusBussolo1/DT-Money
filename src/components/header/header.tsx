import Image from 'next/image'

import { Button } from '../ui/button'

import IgniteSimbol from '../../../public/ignite-simbol.svg'

export function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={IgniteSimbol} alt="Imagem do símbolo do Ignite" />
        <h1 className="text-gray7 text-2xl font-bold">DT Money</h1>
      </div>
      <Button size={'lg'} variant={'outline'}>
        Nova transação
      </Button>
    </header>
  )
}
