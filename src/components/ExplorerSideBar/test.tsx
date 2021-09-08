import { render, screen } from '@testing-library/react'

import ExplorerSideBar from '.'

describe('<ExplorerSideBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<ExplorerSideBar />)

    expect(screen.getByRole('heading', { name: /ExplorerSideBar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
