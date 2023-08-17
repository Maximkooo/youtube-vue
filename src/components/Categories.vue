<template>
  <section
    class="pt-14 md:pl-24 xl:pl-64 w-full fixed bg-white bg-opacity-95 z-10"
  >
    <div class="border-t border-b px-4 max-w-screen-2xl m-auto">
      <div class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
        <a
          v-for="(category, idx) in categories"
          :key="idx"
          href="#"
          class="px-3 py-1 transition border rounded-full"
          :class="[
            category === 'All'
              ? 'bg-gray-600 border-gray-700 hover:bg-gray-500 text-white'
              : 'border-gray-300 bg-gray-100 hover:bg-gray-200',
          ]"
          >{{ category }}</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        "All",
        "Trucks",
        "Tools",
        "Machines",
        "Engines",
        "Snow",
        "Ships",
        "Roads",
        "Tanks",
        "Building",
        "Mars",
        "Woodworking",
        "Tractors",
        "Songs",
        "TV Shows",
        "Football",
        "Planes",
        "Live",
        "Streets",
        "Math",
        "Programming",
      ],
    };
  },
};
</script>