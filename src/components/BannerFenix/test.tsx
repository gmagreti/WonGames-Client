import { render, screen } from '@testing-library/react'

import BannerFenix from '.'

describe('<BannerFenix />', () => {
  it('should render the heading', () => {
    const { container } = render(<BannerFenix />)

    expect(screen.getByRole('heading', { name: /BannerFenix/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
