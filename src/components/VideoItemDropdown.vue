<template>
  <div class="relative -mt-1 ml-auto">
    <button
      @click="isOpen = !isOpen"
      class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <BaseIcon name="dotsVertical" class="w-6 h-6" />
    </button>
    <div
      v-if="isOpen"
      class="absolute top-9 -right-full sm:right-0 bg-white w-48 rounded shadow focus:outline-none"
    >
      <section class="py-2">
        <ul>
          <VideoItemDropdownListItem title="Add to queue" icon="list" />
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import VideoItemDropdownListItem from "./VideoItemDropdownListItem.vue";

export default {
  components: { BaseIcon, VideoItemDropdownListItem },
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    window.addEventListener("click", (event) => {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    });
  },
};
</script>