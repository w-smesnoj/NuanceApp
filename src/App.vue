<template>
  <div id="app">
    <NavigationBar />
    <Menu />
    <div id="view">
      <router-view />
    </div>
    <footer></footer>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import NavigationBar from "@/components/base/NavigationBar.vue";
import Menu from "@/components/base/Menu.vue";

export default {
  name: "App",
  components: { NavigationBar, Menu },
  data: () => ({}),
  mounted() {},
  methods: {
    // ...mapMutations({
    //   setWidth: "set_width",
    // }),
  },
};
</script>

<style>
footer {
  z-index: 100;
  background: red;
  color: white;
}
:root {
  --bg-main: #ffffff;
  --bg-scnd: #f2f2f2;
  --bg-alt: #191919;
  --txt-main: #191919;
  --txt-accent: #959595;
  --txt-main-od: #ffffff; /* on dark */
  --accent: #0057ff;
}
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: default;
  height: 100vh;
  display: grid;
  grid-auto-rows: auto 1fr;
  overflow: hidden;
}
#view {
  overflow-y: scroll;
  grid-row: 2;
  grid-column: 1;
}

button,
a {
  cursor: pointer;
  transition: color 0.1s;
}

span {
}
</style>
