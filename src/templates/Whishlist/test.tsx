import { render, screen } from '@testing-library/react'

import Whishlist from '.'

describe('<Whishlist />', () => {
  it('should render the heading', () => {
    const { container } = render(<Whishlist />)

    expect(screen.getByRole('heading', { name: /Whishlist/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
