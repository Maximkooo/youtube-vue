<template>
  <aside
    class="min-h-screen hidden md:block xl:hidden overflow-auto fixed top-0 pt-14 bg-white z-20"
  >
    <section>
      <ul>
        <li v-for="item in generalCategory" :key="item.key">
          <a
            href="#"
            class="flex flex-col items-center px-2 py-5 hover:bg-gray-100"
            :class="{ 'text-red-500': item.isActive }"
          >
            <BaseIcon :name="item.key" class="w-6 h-6 mb-1.5" />
            <span class="text-xs">{{ item.name }}</span>
          </a>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: { BaseIcon },
  data() {
    return {
      generalCategory: [
        { key: "home", name: "Home", isActive: true },
        { key: "fire", name: "Trending" },
        { key: "subscription", name: "Subscriptions" },
        { key: "library", name: "Library" },
        { key: "history", name: "History" },
      ],
    };
  },
};
</script>