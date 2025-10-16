import { z } from "zod";

const ZOrder = z.object({
  email: z.string().email("Invalid email address."),
  productId: z.string().trim(),
  price: z.number().min(0, "Price must be >= 0."),
  quantity: z.number().min(1, "Price quantity must be >= 1."),
});

export default ZOrder;