import React from 'react';
import { render } from '@testing-library/react';
import Logo from 'src/assets/icons/logo.svg';
import { Image } from 'src/components/UI/image/image';

describe('Image Component', () => {
  test('test that is displayed with the correct attributes', () => {
    const { getByTestId } = render(<Image src={Logo} alt='logo' className='logo-image' />);
    const imgElement = getByTestId('image-component-logo');

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', Logo);
    expect(imgElement).toHaveAttribute('alt', 'logo');
    expect(imgElement).toHaveClass('logo-image');
    expect(imgElement).not.toHaveClass('undefined');
  });
});
