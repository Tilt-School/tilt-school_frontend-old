import React from 'react';
import { fireEvent, GetByBoundAttribute, render, cleanup } from '@testing-library/react';
import { StoreProvider } from 'src/store/store-provider';
import { BurgerButton } from './burger-button';
import classes from './burger-button.module.scss';

enum EMenuAriaLabel {
  open = 'Open menu',
  close = 'Close menu',
}

describe('Burger Button Component', () => {
  let burgerButtonElement: ReturnType<GetByBoundAttribute<HTMLElement>>;

  beforeEach(() => {
    cleanup();

    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'));
    };

    window.resizeTo(750, window.innerHeight);

    const { getByTestId } = render(
      <StoreProvider>
        <BurgerButton />
      </StoreProvider>,
    );

    burgerButtonElement = getByTestId('menu-burger-button');
  });

  test('test that is displayed with the correct attributes', () => {
    expect(burgerButtonElement).toBeInTheDocument();
    expect(burgerButtonElement).toHaveAttribute('aria-label', EMenuAriaLabel.open);
    expect(burgerButtonElement).not.toHaveClass(classes.active);

    fireEvent.click(burgerButtonElement);

    expect(burgerButtonElement).toHaveAttribute('aria-label', EMenuAriaLabel.close);
    expect(burgerButtonElement).toHaveClass(classes.active);

    fireEvent.keyDown(burgerButtonElement, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(burgerButtonElement).toHaveAttribute('aria-label', EMenuAriaLabel.open);
    expect(burgerButtonElement).not.toHaveClass(classes.active);

    fireEvent.keyDown(burgerButtonElement, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(burgerButtonElement).toHaveAttribute('aria-label', EMenuAriaLabel.close);
    expect(burgerButtonElement).toHaveClass(classes.active);
  });
});
