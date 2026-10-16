import { describe, expect, it } from 'vitest';
import { cheeses, enquiryUrl, formatPrice } from '../lib/cheeses';
describe('Company commercial references', () => {
  it('uses the provided direct Paria price of S/ 67.50 per kilogram', () => {
    expect(cheeses.find(c => c.id === 'paria')?.price).toBe(67.5);
  });
  it('uses the provided direct blue cheese price of S/ 85 per kilogram', () => {
    expect(cheeses.find(c => c.id === 'azul')?.price).toBe(85);
  });
  it('does not invent a direct price for Paria Gourmet', () => {
    expect(cheeses.find(c => c.id === 'gourmet')?.price).toBeNull();
  });
  it('keeps Paria maturation at four to eight months', () => {
    expect(cheeses.find(c => c.id === 'paria')?.maturation).toBe('4 a 8 meses');
  });
  it('keeps blue maturation at two to three months', () => {
    expect(cheeses.find(c => c.id === 'azul')?.maturation).toBe('2 a 3 meses');
  });
  it('uses the company WhatsApp contact and safely encodes the enquiry', () => {
    const url = new URL(enquiryUrl('Cata: Paria & Azul'));
    expect(url.pathname).toBe('/51997988594');
    expect(url.searchParams.get('text')).toBe('Cata: Paria & Azul');
  });
  it('formats prices in soles with the exact decimal value', () => {
    expect(formatPrice(67.5)).toBe('S/ 67,50');
  });
});