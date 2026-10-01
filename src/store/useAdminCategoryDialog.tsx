import { getCategoryFns } from "@/api/api-function/category.function";
import { CategoryPayload } from "@/types";
import { create } from "zustand";

interface CategoryDialogState {
  isCategoryDialogOpen: boolean;
  categoryImage: string | null;

  setCategoryImage: (img: string) => void;
  openCategoryDialog: () => void;
  closeCategoryDialog: () => void;
  toggleCategoryDialog: () => void;
  createCategory: (payload: CategoryPayload)=> Promise<any>
  getCategory: ()=> void
}

export const useCategoryDialogStore = create<CategoryDialogState>((set) => ({
  isCategoryDialogOpen: false,
  categoryImage: null,

  setCategoryImage: (image: string) => {
    set({
      categoryImage: image,
    });
  },

  openCategoryDialog: () =>
    set({
      isCategoryDialogOpen: true,
      categoryImage: null,
    }),

  closeCategoryDialog: () =>
    set({
      isCategoryDialogOpen: false,
      categoryImage: null,
    }),

  toggleCategoryDialog: () =>
    set((state) => ({
      isCategoryDialogOpen: !state.isCategoryDialogOpen,
    })),

    createCategory : (payload:CategoryPayload )=> {
      
    },
    getCategory : async ()=> {
      const res = await getCategoryFns()
      
      console.log("res in zustand ", res)
    }

}));
