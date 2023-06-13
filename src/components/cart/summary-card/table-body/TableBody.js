const TableBody = ({ item }) => {
  return (
    <tr>
      <th>{item?.title}</th>
      <th>{item?.quantity}</th>
      <th>${item?.price}</th>
      <th>${item?.subtotal}</th>
    </tr>
  );
};

export default TableBody;
