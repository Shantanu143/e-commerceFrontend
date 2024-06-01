import { useState, FormEvent, ChangeEvent, useEffect } from "react";
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
import productService from "@/service/product.service";
import { useNavigate, useParams } from "react-router-dom";

// Define interface for form data
interface ProductData {
  productName: string;
  description: string;
  category: string;
  price: string;
  image: string;

  timestamp: string;
}
const initialProductData: ProductData = {
  productName: "",
  description: "",
  category: "",
  price: "",
  image: "",
  timestamp: "",
};

const EditProduct = () => {
  const [productData, setProductData] =
    useState<ProductData>(initialProductData);

  const [msg, setMsg] = useState<string>("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  //   getting data using use param

  const data = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    productService
      .getProductById(Number(data.id))
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!productData.productName)
      newErrors.productName = "Product productName is required.";
    if (!productData.description)
      newErrors.description = "Description is required.";
    if (!productData.category) newErrors.category = "Category is required.";
    if (!productData.price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(Number(productData.price))) {
      newErrors.price = "Price must be a number.";
    }
    if (!productData.image)
      newErrors.image = "At least one image URL is required.";

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

    console.log("Form Data:", updatedProductData);

    productService
      .saveProduct(updatedProductData)
      .then((res) => {
        setMsg("Product Added Successfully");
        console.log(res);
        navigate("/vender/products");
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setProductData({ ...productData, [id]: value });
  };

  const handleImageInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProductData({ ...productData, image: value });
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
            <Label htmlFor="productName">Product Name</Label>
            <Input
              id="productName"
              placeholder="Product Name"
              value={productData.productName}
              onChange={handleInputChange}
            />
            {errors.productName && (
              <p className="text-red-500">{errors.productName}</p>
            )}
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
          <CardDescription>Input product image URLs.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="image">image</Label>
            <Input
              id="image"
              type="text"
              placeholder="Image URL"
              value={productData.image}
              onChange={handleImageInputChange}
            />
            {errors.image && <p className="text-red-500">{errors.image}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit">Upload</Button>
        </CardFooter>
        <CardContent>
          {msg && (
            <h1 className="text-center text-2xl text-green-500 mb-5">{msg}</h1>
          )}
        </CardContent>
      </Card>
    </form>
  );
};

export default EditProduct;
