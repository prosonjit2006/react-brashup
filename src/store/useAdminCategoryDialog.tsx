import { create } from "zustand";

interface CategoryDialogState {
  isCategoryDialogOpen: boolean;

  openCategoryDialog: () => void;
  closeCategoryDialog: () => void;
  toggleCategoryDialog: () => void;
}

export const useCategoryDialogStore = create<CategoryDialogState>((set) => ({
  isCategoryDialogOpen: false,

  openCategoryDialog: () =>
    set({
      isCategoryDialogOpen: true,
    }),

  closeCategoryDialog: () =>
    set({
      isCategoryDialogOpen: false,
    }),

  toggleCategoryDialog: () =>
    set((state) => ({
      isCategoryDialogOpen: !state.isCategoryDialogOpen,
    })),
}));