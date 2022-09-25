/* eslint-disable no-undef */
import { Example } from '@/components/index';
import ExampleContextWrapper from '@/context/ExampleContext';
import { render, screen } from '@testing-library/react';

describe('Example component', () => {
  it('renders a heading', () => {
    render(
      <ExampleContextWrapper>
        <Example />
      </ExampleContextWrapper>
    );

    const heading = screen.getByRole('heading', {
      name: /example component/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
