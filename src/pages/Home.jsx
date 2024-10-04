import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  function handlerNavigate() {
    navigate('products');
  }
  return (
    <>
      <h1>This is HomePage</h1>
      <button onClick={handlerNavigate}>products</button>
    </>
  );
}
