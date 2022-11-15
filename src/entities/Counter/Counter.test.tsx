import { fireEvent, render } from 'solid-testing-library';
import { describe, it } from 'vitest';

import { Counter } from '~/entities/Counter';

describe('<Counter />', () => {
  it('renders', ({ expect }) => {
    const { container, unmount } = render(() => <Counter />);
    expect(container).toMatchSnapshot();
    unmount();
  });

  it('increments value', async ({ expect }) => {
    const { queryByText, queryByTestId, unmount } = render(() => <Counter />);
    const incButton = queryByText('Increment');
    const decButton = queryByText('Decrement');
    const stateLabel = queryByTestId('counter-state');

    expect(incButton).toBeInTheDocument();
    expect(stateLabel).toHaveTextContent(/State: 0/);

    fireEvent.click(incButton);
    expect(stateLabel).toHaveTextContent(/State: 1/);

    fireEvent.click(decButton);
    expect(stateLabel).toHaveTextContent(/State: 0/);

    unmount();
  });
});
