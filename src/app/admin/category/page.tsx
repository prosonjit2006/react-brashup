"use client";

import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Pencil, Trash2, Plus } from "lucide-react";
import { useCategoryDialogStore } from "@/store/useAdminCategoryDialog";
import CategoryDialog from "@/components/CategoryDialog";

const categories = [
  {
    id: "1",
    name: "Electronics",
    description: "Electronic products and accessories",
    status: "Active",
  },
  {
    id: "2",
    name: "Clothing",
    description: "Men and women clothing",
    status: "Active",
  },
  {
    id: "3",
    name: "Books",
    description: "Books and educational materials",
    status: "Inactive",
  },
  {
    id: "4",
    name: "Furniture",
    description: "Home and office furniture",
    status: "Active",
  },
];

const Category = () => {
  const {
    isCategoryDialogOpen,
    openCategoryDialog,
    closeCategoryDialog,
    getCategory,
  } = useCategoryDialogStore();

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Categories</h1>

          <p className="text-sm text-muted-foreground">
            Manage your product categories
          </p>
        </div>

        {/* Add Category Button */}
        <Button onClick={openCategoryDialog}>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Category Dialog */}
      <CategoryDialog />

      {/* Category Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">S.No</TableHead>

              <TableHead>Name</TableHead>

              <TableHead>Description</TableHead>

              <TableHead>Status</TableHead>

              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {categories.map((category, index) => (
              <TableRow key={category.id}>
                {/* S.No */}
                <TableCell className="font-medium">{index + 1}</TableCell>

                {/* Name */}
                <TableCell className="font-medium">{category.name}</TableCell>

                {/* Description */}
                <TableCell className="text-muted-foreground">
                  {category.description}
                </TableCell>

                {/* Status */}
                <TableCell>
                  <Badge
                    variant={
                      category.status === "Active" ? "default" : "secondary"
                    }
                  >
                    {category.status}
                  </Badge>
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Edit category"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="destructive"
                      size="icon"
                      aria-label="Delete category"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Category;
