import { render, screen } from '@testing-library/react'

import CartList from '.'

describe('<CartList />', () => {
  it('should render the heading', () => {
    const { container } = render(<CartList />)

    expect(
      screen.getByRole('heading', { name: /CartList/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
