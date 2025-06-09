// export async function  fetchProducts(){
    
//     const response = await fetch(`https://dummyjson.com/products?limit=52`);
//     console.log("API response status:", response.status); // Add this
//     const data = await response.json();
//     return data.products;
// }

let cachedProducts: any[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes cache

export async function fetchProducts(limit = 12) {
    // Return cached data if available and not expired
    if (cachedProducts && Date.now() - lastFetchTime < CACHE_DURATION) {
        return cachedProducts.slice(0, limit);
    }

    try {
        const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
        if (!response.ok) throw new Error('Network response was not ok');
        
        const data = await response.json();
        cachedProducts = data.products;
        lastFetchTime = Date.now();
        
        return cachedProducts.slice(0, limit);
    } catch (error) {
        console.error("Error fetching products:", error);
        // Return empty array or cached data even if stale
        return cachedProducts?.slice(0, limit) || [];
    }
}

export async function fetchBestSellers(limit = 8) {
    // First try to get from cache
    if (cachedProducts) {
        return cachedProducts
            .sort((a, b) => (b.rating - a.rating) || (b.stock - a.stock))
            .slice(0, limit);
    }

    // If no cache, fetch with sorting parameters
    const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&select=id,title,price,thumbnail,rating,stock`
    );
    const data = await response.json();
    return data.products.sort((a: any, b: any) => b.rating - a.rating);
}