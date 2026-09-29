import { ProductInputField } from "@/types/interface/product.interface";

export const productInputFields: ProductInputField[] = [
  {
    label: "Product Title",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Product Description",
    name: "description",
    type: "text",
    isTextarea: true,
    required: true,
  },
  {
    label: "Product Category",
    name: "category",
    type: "text",
    required: true,
  },
  {
    label: "Enter Price",
    name: "price",
    type: "number",
    required: true,
  },
];
