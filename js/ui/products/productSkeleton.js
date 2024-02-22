export default function productSkeleton() {
  return `<div class="flex animate-pulse">
      <div class="ms-4 mt-2 mb-6 w-full">
        <h3
          class="h-4 bg-gray-200 rounded-full dark:bg-gray-300"
          style="width: 40%"
        ></h3>

        <ul class="mt-5 space-y-3">
          <li class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-300"></li>
          <li class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-300"></li>
          <li class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-300"></li>
        </ul>

        <button disabled class="bg-gray-300 text-white px-4 py-2 mt-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>`;
}
