import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useCategoryDialogStore } from "@/store/useAdminCategoryDialog";
import { useForm } from "react-hook-form";
import { CategoryPayload } from "@/types";
import Image from "next/image";

const CategoryDialog = () => {
  const {
    isCategoryDialogOpen,
    categoryImage,
    closeCategoryDialog,
    setCategoryImage,
  } = useCategoryDialogStore();

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CategoryPayload>({
    defaultValues: {
      name: "",
      description: "",
      image: null,
    },
  });

  const onSubmit = async (data: CategoryPayload) => {
    // const res = await auth.verifyEmailuser(data);
    // console.log("res in verify page", res);
  };

  return (
    <Dialog
      open={isCategoryDialogOpen}
      onOpenChange={(open) => {
        if (!open) {
          closeCategoryDialog();
        }
      }}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>

          <DialogDescription>
            Create a new product category by providing the required information.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Category Name */}
          <div className="space-y-2">
            <Label htmlFor="name">
              Category Name
              <span className="ml-1 text-red-500">*</span>
            </Label>

            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter category name"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>

            <Textarea
              id="description"
              name="description"
              placeholder="Enter category description"
              rows={4}
            />
          </div>

          {/* Image */}
          <div className="space-y-2">
            <Label htmlFor="image">
              Category Image
              <span className="ml-1 text-red-500">*</span>
            </Label>

            <Input
              onChange={(e) => {
                const file = e?.target?.files?.[0] as File;
                setValue("image", file);
                const imageURL = URL.createObjectURL(file);
                setCategoryImage(imageURL);
              }}
              id="image"
              name="image"
              type="file"
              accept="image/*"
              required
            />
            {
                categoryImage && (
                    <Image src={categoryImage} alt="image" width={300} height={300}/>
                )
            }
          </div>

          {/* Dialog Buttons */}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={closeCategoryDialog}
            >
              Cancel
            </Button>

            <Button type="submit">Create Category</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryDialog;
