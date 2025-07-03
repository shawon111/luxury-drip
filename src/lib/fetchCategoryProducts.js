import { BaseUrl } from "./BaseUrl";

export const fetchCategoryProducts = async (query, home = false, campus = false) => {
  try {
    const response = await fetch(`${BaseUrl}/products_shoes_discounted.json`);

    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }

    const allProducts = await response.json();

    // Normalize function to clean strings
    const normalize = (str) =>
      str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim();

    const searchWords = normalize(query).split(" ");

    const filtered = allProducts.filter((product) => {
      const fieldToSearch = campus ? product.category : product.title;
      const normalizedField = normalize(fieldToSearch);
      return searchWords.some((word) => normalizedField.includes(word));
    });

    if (home) {
      const limit = 8;
      return filtered.slice(0, limit);
    }

    return filtered;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
};
