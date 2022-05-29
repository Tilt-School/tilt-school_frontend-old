import React from 'react';
import { fireEvent, GetByBoundAttribute, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Menu } from 'src/components/sidebar/components/menu/menu';
import { StoreProvider } from 'src/store/store-provider';
import classes from './menu.module.scss';

describe('Menu Component', () => {
  let menuElement: ReturnType<GetByBoundAttribute<HTMLElement>>;
  let burgerButtonElement: ReturnType<GetByBoundAttribute<HTMLElement>>;

  beforeAll(() => {
    fireEvent.resize(window, { innerWidth: 765 });

    const { getByTestId } = render(
      <MemoryRouter>
        <StoreProvider>
          <Menu />
        </StoreProvider>
      </MemoryRouter>,
    );

    menuElement = getByTestId('menu-component');
    burgerButtonElement = getByTestId('menu-burger-button');
  });

  test('test that the menu opens correctly', () => {
    fireEvent.click(burgerButtonElement);
    expect(menuElement).toHaveClass(classes.active);

    fireEvent.click(burgerButtonElement);
    expect(menuElement).not.toHaveClass(classes.active);
  });
});
