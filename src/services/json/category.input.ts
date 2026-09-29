import { CategoryInputField } from "@/types";

export const categoryInputFields: CategoryInputField[] = [
  {
    label: "Category Name",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Category Description",
    name: "description",
    type: "text",
    isTextarea: true,
    required: false,
  },
  {
    label: "Category Image",
    name: "image",
    type: "file",
    required: true,
  },
];