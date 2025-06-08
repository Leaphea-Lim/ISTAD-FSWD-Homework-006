export async function  fetchProducts(){
    const response = await fetch(`https://dummyjson.com/products?limit=52`);
    console.log("API response status:", response.status); // Add this
    const data = await response.json();
    return data.products;
}