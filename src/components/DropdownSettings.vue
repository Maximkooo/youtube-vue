<template>
  <div
    class="opacity-0 group-hover:opacity-100 absolute top-9 -right-full sm:right-0 bg-white w-72 border border-t-0"
  >
    <section class="py-2 border-b">
      <ul>
        <DropdownSettingsListItem
          v-for="(item, index) in items"
          :key="index"
          :title="item.title"
          :icon="item.icon"
          :withSubMenu="item.subMenu"
        />
      </ul>
    </section>
    <section class="py-2">
      <ul>
        <DropdownSettingsListItem title="Restricted Mode: Off" withSubMenu />
      </ul>
    </section>
  </div>
</template>

<script>
import BaseIcon from "./BaseIcon.vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";

export default {
  components: { BaseIcon, DropdownSettingsListItem },
  data() {
    return {
      items: [
        { title: "Appearance: Light", icon: "sun", subMenu: true },
        { title: "Language: English", icon: "language", subMenu: true },
        { title: "Location: Ukraine", icon: "location", subMenu: true },
        { title: "Settings", icon: "settings" },
        { title: "Your data in YouTube", icon: "data" },
        { title: "Help", icon: "help" },
        { title: "Send feedback", icon: "feedback" },
        { title: "Keyboard shortcuts", icon: "keyboard" },
      ],
    };
  },
};
</script>