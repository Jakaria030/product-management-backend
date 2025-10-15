import { z } from "zod";

const ZProduct = z.object({
  name: z.string().trim().min(2, "Product name is required."),
  description: z.string().trim().min(2, "Product description is required."),
  price: z.number().min(0, "Product price must be >= 0."),
  category: z.string().trim().min(1, "Product category is required."),
  tags: z.array(z.string()).optional().default([]),
  variants: z
    .array(
      z.object({
        type: z.string().trim().min(1, "Variant type is required."),
        value: z.string().trim().min(1, "Variant value is required."),
      })
    )
    .optional()
    .default([]),
  inventory: z.object({
    quantity: z.number().min(0, "Product quantity cannot be negative."),
    inStock: z.boolean().optional().default(true),
  }),
});

export default ZProduct;
