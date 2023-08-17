<template>
  <div class="flex items-start mt-3">
    <img
      :src="`https://picsum.photos/seed/avatar${index}/68`"
      class="mr-3 rounded-full w-9 h-9"
      alt=""
    />
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title</span>
      <div class="mt-1 flex items-center">
        <span>Channel name</span>
        <BaseIcon name="tick" class="w-3.5 h-3.5 ml-1" />
      </div>
      <div>1K views &middot; 1 day ago</div>
    </div>
    <button
      class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <BaseIcon name="dotsVertical" class="w-6 h-6" />
    </button>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";

export default {
  components: { BaseIcon },
  props: {
    index: {
      required: true,
      type: Number,
    },
  },
};
</script>