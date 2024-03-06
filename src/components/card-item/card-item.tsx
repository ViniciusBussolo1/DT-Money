import Image from 'next/image'

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

import IconEntrada from '../../../public/incon-entrada.svg'
import IconSaida from '../../../public/icon-saida.svg'

import { DollarSign } from 'lucide-react'

interface CardItemProps {
  title: 'Entradas' | 'Saidas' | 'Total'
  transacao?: 'entrada' | 'saida'
  preco: number
}

export function CardItem({ title, transacao, preco }: CardItemProps) {
  return (
    <Card className="max-w-[22rem] w-full">
      <CardHeader className="w-full flex flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {transacao === 'entrada' ? (
          <Image src={IconEntrada} alt="Icone de entrada" />
        ) : transacao === 'saida' ? (
          <Image src={IconSaida} alt="Icone de saída" />
        ) : (
          <DollarSign />
        )}
      </CardHeader>
      <CardContent>
        <span className="text-3xl font-bold">
          {preco.toLocaleString('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          })}
        </span>
      </CardContent>
    </Card>
  )
}
