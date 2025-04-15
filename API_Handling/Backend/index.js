import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Smartphone",
      price: 699,
      image: "https://picsum.photos/id/1010/300/200",
    },
    {
      id: 2,
      name: "Smart TV",
      price: 999,
      image: "https://picsum.photos/id/1011/300/200",
    },
    {
      id: 3,
      name: "Laptop",
      price: 1299,
      image: "https://picsum.photos/id/180/300/200",
    },
    {
      id: 4,
      name: "Bluetooth Headphones",
      price: 199,
      image: "https://picsum.photos/id/250/300/200",
    },
    {
      id: 5,
      name: "Smartwatch",
      price: 249,
      image: "https://picsum.photos/id/1060/300/200",
    },
  ];

  if (req.query.search) {
    const filterProducts = products.filter((products) =>
      products.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
