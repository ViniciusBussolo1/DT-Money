import { CardItem } from '@/components/card-item/card-item'
import { Header } from '@/components/header/header'
import { TableItems } from '@/components/table/table-items'

export default function Home() {
  return (
    <main className="max-w-[70rem] w-full pt-12 px-2">
      <Header />
      <div className="w-full flex gap-6 mt-10">
        <CardItem title="Entradas" transacao="entrada" preco={17400} />
        <CardItem title="Saidas" transacao="saida" preco={1259} />
        <CardItem title="Total" preco={16141} />
      </div>
      <TableItems />
    </main>
  )
}
