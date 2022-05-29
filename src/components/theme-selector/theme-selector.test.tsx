import React from 'react';
import { cleanup, fireEvent, GetByBoundAttribute, getByTestId, render } from '@testing-library/react';
import { ThemeSelector } from 'src/components/theme-selector/theme-selector';
import { StoreProvider } from 'src/store/store-provider';
import { ThemeEnum } from 'src/types/enum';

describe('Theme Selector Component', () => {
  let themeSelectorElement: ReturnType<GetByBoundAttribute<HTMLElement>>;

  beforeEach(() => {
    cleanup();

    themeSelectorElement = render(
      <StoreProvider>
        <ThemeSelector />
      </StoreProvider>,
    ).getByTestId('theme-selector');
  });

  test('test that the theme changes correctly', () => {
    expect(themeSelectorElement).toBeInTheDocument();

    const darkThemeToggle = getByTestId(themeSelectorElement, 'theme-selector-item-dark');
    const lightThemeToggle = getByTestId(themeSelectorElement, 'theme-selector-item-light');
    const purpleThemeToggle = getByTestId(themeSelectorElement, 'theme-selector-item-purple');
    const blueThemeToggle = getByTestId(themeSelectorElement, 'theme-selector-item-blue');
    const redThemeToggle = getByTestId(themeSelectorElement, 'theme-selector-item-red');

    fireEvent.click(darkThemeToggle);

    expect(document.body.classList.contains(ThemeEnum.DARK));

    fireEvent.click(lightThemeToggle);

    expect(document.body.classList.contains(ThemeEnum.LIGHT));

    fireEvent.click(purpleThemeToggle);

    expect(document.body.classList.contains(ThemeEnum.PURPLE));

    fireEvent.click(blueThemeToggle);

    expect(document.body.classList.contains(ThemeEnum.BLUE));

    fireEvent.click(redThemeToggle);

    expect(document.body.classList.contains(ThemeEnum.RED));

    fireEvent.click(darkThemeToggle);

    expect(document.body.classList.contains(ThemeEnum.DARK));
  });
});
