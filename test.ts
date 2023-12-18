import test from "ava";
import { User, Product } from "./index";

test("Testeo la clase Product", (t) => {
  const producto = new Product("Pelota", 1000);

  t.is(producto.name, "Pelota");

  t.is(producto.price, 1000);
});

test("Testeo la clase User y sus métodos", (t) => {
  const nuevoUser = new User("Juancito");
  const producto = new Product("Pelota", 1000);

  t.is(nuevoUser.name, "Juancito");
  nuevoUser.addProduct(producto);

  t.is(nuevoUser.products[0], producto);
});
