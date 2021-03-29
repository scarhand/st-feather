import { newE2EPage } from '@stencil/core/testing';

describe('icon-linkedin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-linkedin></icon-linkedin>');

    const element = await page.find('icon-linkedin');
    expect(element).toHaveClass('hydrated');
  });

  it('renders one-word props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-linkedin stroke="blue"></icon-linkedin>');

    const element = await page.find('icon-linkedin');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke', 'blue');

    const svg = await page.find('icon-linkedin > svg');
    expect(svg).toEqualAttribute('stroke', 'blue');
  });

  it('renders dashed props', async () => {
    const page = await newE2EPage();
    await page.setContent('<icon-linkedin stroke-width="2"></icon-linkedin>');

    const element = await page.find('icon-linkedin');
    expect(element).toHaveClass('hydrated');
    expect(element).toEqualAttribute('stroke-width', 2);

    const svg = await page.find('icon-linkedin > svg');
    expect(svg).toEqualAttribute('stroke-width', 2);
  });
});