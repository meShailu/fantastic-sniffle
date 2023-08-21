import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <p>Category: {data.category}</p>
    </div>
  );
}
