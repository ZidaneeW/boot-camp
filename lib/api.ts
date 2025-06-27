export async function getProducts(limit: number = 5) {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return res.json();
}
