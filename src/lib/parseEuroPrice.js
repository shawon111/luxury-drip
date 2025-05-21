export function parseEuroPrice(originalPrice) {
  if (!originalPrice || typeof originalPrice !== 'string') {
    return 0; // or return null, depending on how you want to handle it
  }
  const price = originalPrice.replace(/\s/g, '') // remove spaces
    .replace(',', '.') // replace comma with dot
    .replace(/[^0-9.]/g, ''); // remove non-numeric except dot
  return parseFloat(price);
}