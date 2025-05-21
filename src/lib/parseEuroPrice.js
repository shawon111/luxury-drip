export function parseEuroPrice(originalPrice) {
    const price = originalPrice.replace(/\s/g, '') // remove spaces
      .replace(',', '.') // replace comma with dot
      .replace(/[^0-9.]/g, ''); // remove non-numeric except dot
    return parseFloat(price);
  }