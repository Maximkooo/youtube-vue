<template>
  <main class="md:ml-24 xl:ml-64 pt-32 px-5 pb-5">
    <div
      class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl m-auto"
    >
      <a href="#" class="mb-7 group" v-for="i in 20" :key="i" :index="i">
        <VideoItemThumbnail :index="i" />
        <VideoItemInfo :index="i" />
      </a>
    </div>
  </main>
</template>

<script>
import VideoItemThumbnail from "./VideoItemThumbnail.vue";
import VideoItemInfo from "./VideoItemInfo.vue";

export default {
  components: {
    VideoItemThumbnail,
    VideoItemInfo,
  },
};
</script>