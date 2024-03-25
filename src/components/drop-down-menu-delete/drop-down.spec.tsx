import { fireEvent, render, screen } from '@testing-library/react'
import { DropDownMenuDelete } from './drop-down'
import {
  TransactionContext,
  TransactionContextDataProps,
} from '@/context/new-transaction-context'

import '@testing-library/jest-dom'

const handleDeleteTransaction = jest.fn()

describe('<DropDownMenuDelete />', () => {
  it('should render component correctly', () => {
    render(
      <TransactionContext.Provider
        value={
          { handleDeleteTransaction } as unknown as TransactionContextDataProps
        }
      >
        <DropDownMenuDelete id="teste123" />
      </TransactionContext.Provider>,
    )

    expect(
      screen.getByRole('button', {
        name: /open menu/i,
      }),
    ).toBeInTheDocument()
  })

  it('should render the button and open the menu on click', async () => {
    render(
      <TransactionContext.Provider
        value={
          { handleDeleteTransaction } as unknown as TransactionContextDataProps
        }
      >
        <DropDownMenuDelete id="teste123" />
      </TransactionContext.Provider>,
    )

    const button = screen.getByRole('button', {
      name: /open menu/i,
    })

    fireEvent.click(button)
  })
})
