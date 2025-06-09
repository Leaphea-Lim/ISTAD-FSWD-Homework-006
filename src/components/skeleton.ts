export function renderProductSkeleton(count = 4) {
  return Array(count).fill(
      `
    <div class="max-w-6xl m-6">
        <div class="bg-white rounded-lg shadow p-4 relative flex flex-col h-full">
            <div class="w-full h-40 bg-gray-200 mb-4 animate-pulse"></div>
            <div class="absolute top-4 right-4 flex flex-col space-y-2">
                <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
                <div class="w-6 h-6 bg-gray-200 rounded-full"></div>
            </div>
            <div class="h-6 bg-gray-200 mb-2 w-3/4 animate-pulse"></div>
            <div class="flex items-center mb-2">
                <div class="h-5 bg-gray-200 w-1/4 animate-pulse"></div>
                <div class="ml-2 h-5 bg-gray-200 w-1/4 animate-pulse"></div>
            </div>
            <div class="mt-auto flex space-x-4 pt-4">
                <div class="h-10 bg-gray-200 w-1/2 rounded-lg animate-pulse"></div>
                <div class="h-10 bg-gray-200 w-1/2 rounded-lg animate-pulse"></div>
            </div>
        </div>
    </div>
    `
    )
    .join("");
}
