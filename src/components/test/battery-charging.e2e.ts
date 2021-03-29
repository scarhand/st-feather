import { newE2EPage } from '@stencil/core/testing';

describe('icon-battery-charging', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-charging></icon-battery-charging>');

    const element = await page.find('icon-battery-charging');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-charging stroke="blue"></icon-battery-charging>');

    const element = await page.find('icon-battery-charging');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-battery-charging > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-battery-charging stroke-width="2"></icon-battery-charging>');

    const element = await page.find('icon-battery-charging');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-battery-charging > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});