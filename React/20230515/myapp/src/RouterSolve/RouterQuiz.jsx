import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

export default function RouterQuiz() {
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <Link to="/" style={{ display: "block" }}>
        Home
      </Link>
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}
      <Link to="/product" style={{ display: "block" }}>
        Product
      </Link>
      <Link to="/cart" style={{ display: "block" }}>
        Cart
      </Link>
      <Link to="/users" style={{ display: "block" }}>
        User
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product/:id/notice" element={<ProductNotice />} />
        <Route path="/cart" element={<Cart name="jisu" />} />
        <Route path="/users/*" element={<Users />}>
          <Route path="coupon" element={<div>Coupon</div>} />
          <Route path="question" element={<div>Question</div>} />
          <Route path="notice" element={<div>Notice</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
function Product() {
  const { id } = useParams();
  return (
    <>
      <h1>Product {id}</h1>
    </>
  );
}
function ProductNotice() {
  const { id } = useParams();
  return (
    <>
      <h1>ProductNotice {id}</h1>
    </>
  );
}
function Cart({ name }) {
  return (
    <>
      <h1>Cart {name}님</h1>
    </>
  );
}
function Users() {
  return (
    <>
      <h1>User</h1>
      <Outlet />
    </>
  );
}
