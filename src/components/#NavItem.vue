<template>
  <v-list-item :to="to" :title="title" :prepend-icon="icon" :value="value">
    <template v-if="$slots.default" v-slot:default>
      <slot></slot>
    </template>
    <template v-if="$slots.append" v-slot:append>
      <slot name="append"></slot>
    </template>
  </v-list-item>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: {
      type: [String, Object],
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<!--
HOW TO USE THIS COMPONENT:

<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>DKRozliczApp</v-toolbar-title>
      <v-spacer />
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/logout" text>Logout</v-btn>
    </v-app-bar>

    <v-navigation-drawer app>
      <v-list>
        <v-list-item to="/" title="Home"></v-list-item>
        <v-list-item to="/about" title="About"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script> -->
