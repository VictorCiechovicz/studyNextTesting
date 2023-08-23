import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

it('Home page should have Templates', () => {
  render(<Home />)

  const templates = screen.getByText('Templates')
  expect(templates).toBeDefined()
})
