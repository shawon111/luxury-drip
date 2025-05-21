export const fetchCategoryProducts = async (query, page = 1, home = false) => {
  try {
    const response = await fetch('http://localhost:3000/products.json');

    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }

    const allProducts = await response.json();

    // Normalize function to clean strings
    const normalize = (str) =>
      str
        .toLowerCase()
        .normalize("NFD") // Remove diacritics like é → e
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const limit = home ? 8 : 16;

    const searchWords = normalize(query).split(" ");

    const filtered = allProducts.filter((product) => {
      const normalizedTitle = normalize(product.title);
      return searchWords.some((word) => normalizedTitle.includes(word));
    });

    const startIndex = (page - 1) * limit;
    return filtered.slice(startIndex, startIndex + limit);
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};