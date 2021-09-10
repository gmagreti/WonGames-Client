import { render, screen } from '@testing-library/react'

import BannerFenixx from '.'

describe('<BannerFenixx />', () => {
  it('should render the heading', () => {
    const { container } = render(<BannerFenixx />)

    expect(screen.getByRole('heading', { name: /BannerFenixx/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
