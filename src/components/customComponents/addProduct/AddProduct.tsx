import { useState, FormEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Define interface for form data
interface ProductData {
  name: string;
  description: string;
  category: string;
  price: string;
  images: FileList | null;
  videos: FileList | null;
  timestamp: string;
}

const AddProduct: React.FC = () => {
  const [productData, setProductData] = useState<ProductData>({
    name: "",
    description: "",
    category: "",
    price: "",
    images: null,
    videos: null,
    timestamp: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!productData.name) newErrors.name = "Product Name is required.";
    if (!productData.description)
      newErrors.description = "Description is required.";
    if (!productData.category) newErrors.category = "Category is required.";
    if (!productData.price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(Number(productData.price))) {
      newErrors.price = "Price must be a number.";
    }
    if (!productData.images || productData.images.length === 0)
      newErrors.images = "At least one image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear().toString().slice(-2)}/${(
      currentDate.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")} ${currentDate
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${currentDate
      .getSeconds()
      .toString()
      .padStart(2, "0")}`;

    const updatedProductData = { ...productData, timestamp: formattedDate };

    const logData = [
      { field: "name", value: updatedProductData.name },
      { field: "description", value: updatedProductData.description },
      { field: "category", value: updatedProductData.category },
      { field: "price", value: updatedProductData.price },
      { field: "images", value: updatedProductData.images },
      { field: "videos", value: updatedProductData.videos },
      { field: "timestamp", value: updatedProductData.timestamp },
    ];

    console.log("Form Data:", logData);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setProductData({ ...productData, [id]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, files } = e.target;
    setProductData({ ...productData, [id]: files });
  };

  return (
    <form
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <Card className="p-6 shadow-md sm:p-8">
        <CardHeader>
          <CardTitle className="text-2xl">Basic Information</CardTitle>
          <CardDescription>Set basic product information.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Product Name</Label>
            <Input
              id="name"
              placeholder="Product Name"
              value={productData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Description"
              value={productData.description}
              onChange={handleInputChange}
            />
            {errors.description && (
              <p className="text-red-500">{errors.description}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Select
              onValueChange={(value) =>
                setProductData({ ...productData, category: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="apparel">Apparel</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
            {errors.category && (
              <p className="text-red-500">{errors.category}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              placeholder="Price"
              value={productData.price}
              onChange={handleInputChange}
            />
            {errors.price && <p className="text-red-500">{errors.price}</p>}
          </div>
        </CardContent>
      </Card>
      <Card className="p-6 shadow-md sm:p-8">
        <CardHeader>
          <CardTitle className="text-2xl">Media</CardTitle>
          <CardDescription>Upload product images and videos.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="images">Images</Label>
            <Input
              id="images"
              type="file"
              multiple
              onChange={handleFileChange}
            />
            {errors.images && <p className="text-red-500">{errors.images}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="videos">Videos</Label>
            <Input
              id="videos"
              type="file"
              multiple
              onChange={handleFileChange}
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">Upload</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default AddProduct;
