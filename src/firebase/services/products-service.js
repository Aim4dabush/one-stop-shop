import { setProducts } from "../../redux/slices/productsSlice";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const result = await fetch("https://dummyjson.com/products?limit=100");

      if (!result.ok) {
        throw new Error("Unable to get data");
      }

      const data = await result.json();
      const products = data.products;
      const arr = [];
      products.forEach((product) => {
        let transformTitle = product.title.toLowerCase();

        if (transformTitle.charAt(0) === "-") {
          const newText = transformTitle.replace("-", " ").trimStart();
          transformTitle = newText;
        }

        arr.push({
          brand: product.brand,
          category: product.category,
          description: product.description,
          id: product.id,
          mainPic: product.images[0],
          images: product.images,
          price: product.price,
          rating: product.rating,
          stock: product.stock,
          title: transformTitle,
        });
      });

      dispatch(setProducts(arr));
    } catch (err) {
      alert(err.message);
    }
  };
};
