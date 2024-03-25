import { describe } from 'node:test'

import { render, screen } from '@testing-library/react'

import { CardItem } from './card-item'

import '@testing-library/jest-dom'

describe('<CardItem/>', () => {
  it('should render card-item correctly if title is entradas', () => {
    render(<CardItem title="Entradas" preco={1500} transacao="entrada" />)

    expect(
      screen.getByRole('heading', { name: /entradas/i }),
    ).toBeInTheDocument()
  })

  it('should render card-item correctly if title is saidas', () => {
    render(<CardItem title="Saidas" preco={1500} transacao="saida" />)

    expect(screen.getByRole('heading', { name: /saidas/i })).toBeInTheDocument()
  })

  it('should render card-item correctly if title is total', () => {
    render(<CardItem title="Total" preco={1500} />)

    const svgElement = screen.getByTestId('svg')

    expect(svgElement).toBeInTheDocument()
  })
})
