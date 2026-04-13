import cors from "cors";

app.use(cors({
  origin: "https://fit-aura-8spm.vercel.app",  // <-- yahan apna Vercel domain
  credentials: true
}));

app.use(express.json());

import userRoutes from "./routes/userRoutes.js";
app.use("/api/users", userRoutes);

import productRoutes from "./routes/productRoutes.js";
app.use("/api/products", productRoutes);