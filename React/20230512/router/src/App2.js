import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index name="jisu" />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
function Index({ name }) {
  return <h1>환영합니다. {name}님!</h1>;
}
function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        perspiciatis nisi ratione sapiente veniam quod expedita quae corrupti
        tempora at maxime magni. Saepe ipsam eveniet deserunt voluptas
        voluptatem. Atque, aut!
      </p>
    </div>
  );
}
function Product() {
  return (
    <div>
      <h1>Product</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam neque
        a distinctio consectetur nihil, amet blanditiis maiores animi quaerat
        delectus at sunt, eaque voluptatum impedit adipisci praesentium cumque,
        deleniti sapiente.
      </p>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum
        ut, et voluptate doloribus, delectus esse temporibus expedita
        perspiciatis nostrum nobis, repudiandae eaque fuga facere reiciendis
        veritatis vel illum sint.
      </p>
    </div>
  );
}
export default App;
