/**
 * Format price to Indian Rupees
 * @param {number} price
 * @returns {string}
 */
export const formatPrice = (price) => {
  if (!price) return "₹0";
  return `₹${price.toLocaleString("en-IN")}`;
};

/**
 * Truncate long text (for product cards)
 * @param {string} text
 * @param {number} length
 * @returns {string}
 */
export const truncateText = (text, length = 60) => {
  if (!text) return "";
  return text.length > length
    ? text.substring(0, length) + "..."
    : text;
};

/**
 * Get product by ID from static data
 * @param {Array} products
 * @param {number|string} id
 * @returns {Object|null}
 */
export const getProductById = (products, id) => {
  return products.find((product) => product.id === Number(id)) || null;
};

/**
 * Filter products by category
 * @param {Array} products
 * @param {string} category
 * @returns {Array}
 */
export const filterByCategory = (products, category) => {
  if (!category || category === "All") return products;
  return products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Calculate cart total (UI only)
 * @param {Array} cartItems
 * @returns {number}
 */
export const calculateCartTotal = (cartItems) => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

/**
 * Generate SEO-friendly slug
 * @param {string} text
 * @returns {string}
 */
export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};
