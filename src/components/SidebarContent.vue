<template>
  <SidebarSection>
    <ul>
      <SidebarNavItem title="Home" icon="home" isActive />
      <SidebarNavItem title="Trending" icon="fire" />
      <SidebarNavItem title="Subscriptions" icon="subscription" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem title="Library" icon="library" />
      <SidebarNavItem title="History" icon="history" />
    </ul>
  </SidebarSection>

  <SidebarSection class="px-8 py-4 font-medium leading-5 border-b">
    <span class="text-sm">
      Sign in to like videos, comment, and subscribe.
    </span>
    <ButtonLogin
      class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm"
    />
  </SidebarSection>
  <SidebarSection>
    <SidebarSectionHeading title="Best of YouTube" />
    <ul>
      <SidebarNavItem
        v-for="category in bestCategory"
        :key="category.title"
        :title="category.title"
        :icon="category.icon"
      />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem title="Browse channels" icon="channels" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <SidebarSectionHeading title="More from YouTube" />
    <ul>
      <SidebarNavItem title="YouTube Premium" icon="premium" />
      <SidebarNavItem title="Live" icon="live" />
    </ul>
  </SidebarSection>
  <SidebarSection>
    <ul>
      <SidebarNavItem
        v-for="item in settingsList"
        :key="item.title"
        :title="item.title"
        :icon="item.icon"
      />
    </ul>
  </SidebarSection>
  <SidebarSection class="px-6 py-4 text-xs font-semibold space-y-4">
    <Footer />
  </SidebarSection>
</template>

<script>
import SidebarNavItem from "./SidebarNavItem.vue";
import ButtonLogin from "./ButtonLogin.vue";
import SidebarSectionHeading from "./SidebarSectionHeading.vue";
import SidebarSection from "./SidebarSection.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    SidebarNavItem,
    ButtonLogin,
    SidebarSectionHeading,
    SidebarSection,
    Footer,
  },
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
      settingsList: [
        { title: "Settings", icon: "settings" },
        { title: "Report history", icon: "report" },
        { title: "Help", icon: "help" },
        { title: "Send feedback", icon: "feedback" },
      ],
    };
  },
};
</script>