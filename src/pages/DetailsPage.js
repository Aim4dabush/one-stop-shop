import { useEffect } from "react";
import { useParams } from "react-router-dom";

//components
import Details from "../components/details/Details";

//redux
import { useDispatch, useSelector } from "react-redux";

//slices
import { setProduct } from "../redux/slices/productsSlice";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      const product = products.find((item) => {
        return item.id === parseInt(id);
      });

      dispatch(setProduct(product));
    }
  }, [dispatch, id, products]);
  return (
    <section>
      <Details />
    </section>
  );
};

export default DetailsPage;
