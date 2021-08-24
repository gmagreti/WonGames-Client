import { render, screen } from '@testing-library/react'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(<Container />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
