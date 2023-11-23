<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import { useTheme } from "vuetify/lib/framework";

export default {
  name: "MainNav",

  setup() {
    const instance = getCurrentInstance();
    const theme = useTheme();
    const darkmode = ref(false);

    function changeTheme() {
      darkmode.value = !darkmode.value;
      theme.global.name.value = darkmode.value ? "light" : "dark";
    }

    onMounted(() => {
      // Accessing Vuetify theme from the instance
      if (instance && instance.appContext && instance.appContext.app) {
        theme.framework.theme.dark = darkmode.value;
      }
    });

    return {
      darkmode,
      changeTheme,
      Home: {
        name: "Home",
        path: "/",
      },
      About: {
        name: "Impressum",
        path: "/about",
      },
      Stammbaum: {
        name: "Stammbaum",
        path: "/familytree",
      },
      Login: {
        name: "Login",
        path: "/login",
      },
    };
  },
};
</script>

<template>
  <div>
    <v-app-bar dense color="fff" dark>
      <v-btn icon="mdi-home" color="cyan" :to="Home.path"></v-btn>
      <v-tabs class="navbar">
        <v-tab :to="About.path">{{ About.name }} </v-tab>
        <v-tab :to="Stammbaum.path">{{ Stammbaum.name }} </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-btn icon @click="changeTheme">
        <v-icon
          :icon="darkmode ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        ></v-icon>
      </v-btn>
      <v-btn variant="outlined" color="cyan" :to="Login.path">{{
        Login.name
      }}</v-btn>
    </v-app-bar>
  </div>
</template>

<style>
.navbar {
  float: left !important;
}
.v-tab {
  text-transform: none !important;
}
</style>
