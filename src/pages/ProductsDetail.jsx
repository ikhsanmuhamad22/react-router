import { Link, useParams } from 'react-router-dom';

export default function ProductsDetail() {
  const params = useParams();
  return (
    <>
      <h1>this is detail product</h1>
      <p>{params.productId}</p>

      {/* this is how you to back route as a relative path */}
      <Link to=".." relative="path">
        back
      </Link>
    </>
  );
}
