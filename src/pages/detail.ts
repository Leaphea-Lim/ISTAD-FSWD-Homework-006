export async function renderDetailPage(id:number) {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const product = await response.json()

    const app = document.getElementById('app')
    app!.innerHTML = `
        <h1 class="text-2xl font-bold mb-6">${product.title}</h1>
        <img src="${product.thumbnail}" alt="${product.title}" class="w-1/2 mx-auto mb-6" />
        <p class="mb-4">${product.description}</p>
        <p class="text-lg font-semibold">Price: $${product.price}</p>
    `
}