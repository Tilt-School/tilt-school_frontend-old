import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TrophyIcon from 'src/assets/icons/trophy.svg';
import { MenuItem } from './menu-item';
import classes from './menu-item.module.scss';

describe('MenuItem Component', () => {
  test('test that menuItem becomes active class after click', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MenuItem icon={TrophyIcon} path='/advantages' alt='trophy' title='Advantages' tabIndex={0} />
      </MemoryRouter>,
    );
    const menuItemElement = getByTestId('menu-item-Advantages');

    expect(menuItemElement).toBeInTheDocument();
    fireEvent.click(menuItemElement);
    expect(menuItemElement).toHaveClass(classes.active);
  });
});
