<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>DKRozliczApp</v-toolbar-title>
      <v-spacer />
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
      <v-btn to="/logout" text>Logout</v-btn>
    </v-app-bar>

    <v-navigation-drawer permanent app>
      <v-list v-model:opened="open">
        <!-- <v-list-item prepend-icon="mdi-home" title="Home" to="/"></v-list-item> -->

        <!-- <v-list-group value="Users">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-circle"
              title="Users"
            ></v-list-item>
          </template> -->

        <v-list-group value="Rozliczenie">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Rozlicz"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in Rozliczenie"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Actions"></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
        </v-list-group>
        <!-- </v-list-group> -->
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

// Component name
const name = "App";

// Define reactive data
const open = ref(["Users"]);

const Rozliczenie = [
  ["Wszystkich", "mdi-account-multiple-outline"],
  ["Wybranego kierowce", "mdi-cog-outline"],
];

const cruds = [
  ["Create", "mdi-plus-outline"],
  ["Read", "mdi-file-outline"],
  ["Update", "mdi-update"],
  ["Delete", "mdi-delete"],
];
</script>
