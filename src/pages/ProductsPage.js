import { useEffect } from "react";

//components
import Products from "../components/products/Products";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { getProducts } from "../firebase/services/products-service";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);
  return (
    <section>
      <Products />
    </section>
  );
};

export default ProductsPage;
