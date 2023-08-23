import useSWR from "swr";

export default function Products() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR("/api/products", fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              Price: {product.price} {product.currency}
            </p>
            <p>Category: {product.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
