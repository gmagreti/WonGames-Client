import { render, screen } from '@testing-library/react'

import SliderFenix from '.'

describe('<SliderFenix />', () => {
  it('should render the heading', () => {
    const { container } = render(<SliderFenix />)

    expect(screen.getByRole('heading', { name: /SliderFenix/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
