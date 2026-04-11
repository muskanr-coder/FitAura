import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice, sort, featured } = req.query;

    const query = {};

    if (category && category !== "All") query.category = category;
    if (featured) query.featured = featured === "true";
    if (search) query.name = { $regex: search, $options: "i" };
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    let productQuery = Product.find(query);

    if (sort === "price_asc") productQuery = productQuery.sort({ price: 1 });
    if (sort === "price_desc") productQuery = productQuery.sort({ price: -1 });
    if (sort === "latest") productQuery = productQuery.sort({ createdAt: -1 });

    const products = await productQuery;
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch products", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch product", error: error.message });
  }
};
