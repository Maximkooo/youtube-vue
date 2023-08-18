<template>
  <aside
    class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20"
  >
    <section class="py-2 border-b">
      <ul>
        <SidebarNavItem title="Home" icon="home" isActive />
        <SidebarNavItem title="Trending" icon="fire" />
        <SidebarNavItem title="Subscriptions" icon="subscription" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SidebarNavItem title="Library" icon="library" />
        <SidebarNavItem title="History" icon="history" />
      </ul>
    </section>
    <section class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
      <button
        class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
      >
        <BaseIcon name="user" class="mr-2 w-7 h-7" />
        Sign In
      </button>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        Best of YouTube
      </div>
      <ul>
        <SidebarNavItem
          v-for="category in bestCategory"
          :key="category.title"
          :title="category.title"
          :icon="category.icon"
        />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SidebarNavItem title="Browse channels" icon="channels" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        More from YouTube
      </div>
      <ul>
        <SidebarNavItem title="YouTube Premium" icon="premium" />
        <SidebarNavItem title="Live" icon="live" />
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <SidebarNavItem
          v-for="item in footerList"
          :key="item.title"
          :title="item.title"
          :icon="item.icon"
        />
      </ul>
    </section>
    <section class="px-6 py-4 text-xs font-semibold space-y-4">
      <div>
        <a href="#" class="mr-2">About</a>
        <a href="#" class="mr-2">Press</a>
        <a href="#" class="mr-2">Copyright</a>
        <a href="#" class="mr-2">Contact us</a>
        <a href="#" class="mr-2">Creators</a>
        <a href="#" class="mr-2">Advertise</a>
        <a href="#" class="mr-2">Developers</a>
      </div>
      <div>
        <a href="#" class="mr-2">Terms</a>
        <a href="#" class="mr-2">Privacy</a>
        <a href="#" class="mr-2">Policy & Safety</a>
        <a href="#" class="mr-2">How YouTube works</a>
        <a href="#" class="mr-2">Test new features</a>
      </div>
      <div class="font-normal text-gray-500">&copy; 2021 Google LLC</div>
    </section>
  </aside>
</template>

<script>
import SidebarNavItem from "./SidebarNavItem.vue";
import BaseIcon from "./BaseIcon.vue";
export default {
  components: { SidebarNavItem, BaseIcon },
  data() {
    return {
      bestCategory: [
        { title: "Music", icon: "music" },
        { title: "Sports", icon: "sports" },
        { title: "Gaming", icon: "gaming" },
        { title: "Movies", icon: "movies" },
        { title: "News", icon: "news" },
        { title: "Live", icon: "live" },
        { title: "360&deg; Video", icon: "video" },
      ],
      footerList: [
        { title: "Settings", icon: "settings" },
        { title: "Report history", icon: "report" },
        { title: "Help", icon: "help" },
        { title: "Send feedback", icon: "feedback" },
      ],
    };
  },
};
</script>