<template>
  <nav>
    <div>
      <button class="bars" @click="toggleSidebar">
        <fa fa="bars" v-if="!sidebar_toggle" />
        <fa fa="times" v-else />
      </button>
      <button class="logo"><fa fa="behance" /></button>
    </div>
    <div class="center">
      <div class="link">
        <router-link to="/">
          <div><fa fa="home" /> Home</div>
        </router-link>
        <router-link to="/about">
          <div><fa fa="compass" /> Discover</div>
        </router-link>
      </div>
    </div>
    <div class="social">
      <button><fa fa="search" /></button>
      <button><fa fa="envelope" /></button>
      <button><fa fa="bell" /></button>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NavigationBar",
  computed: {
    ...mapGetters(["sidebar_toggle"]),
  },
  methods: {
    ...mapActions(["toggleSidebar"]),
  },
};
</script>

<style scoped>
/* @media only screen and (max-width: 500px) {
  .link {
    display: none !important;
  }
} */

nav {
  min-height: 60px;
  background: var(--bg-alt);
  color: var(--txt-main-od);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
button {
  width: 60px;
  height: 60px;
  background: transparent;
  border: 0px;
  color: var(--txt-accent);
}
button:hover {
  color: var(--txt-main-od);
}
button:focus {
  outline: 0px !important;
}
nav .center {
  display: grid;
  grid-template-columns: auto 1fr;
  /* width: 100%; */
  height: 100%;
  place-items: center;
}
.logo {
  text-align: left;
  font-size: 1.6em;
  color: var(--bg-main-od);
}
.social {
  grid-column: 3;
  display: grid;
  grid-auto-flow: column;
  height: 100%;

  padding: 0px 15px;
}
.social button {
  padding: 0px 15px;
  width: auto;
}
.bars {
  font-size: 1.3em;
}
.link {
  height: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  grid-auto-flow: column;
}
.link a div {
  display: grid;
  align-items: center;
  margin: 0em 0.5em;
  height: 100%;
  grid-auto-flow: column;
  gap: 0.5em;
}
a {
  color: var(--txt-accent);
  text-decoration: none;
  height: 60px;
}
a:hover,
a.router-link-exact-active {
  color: var(--txt-main-od);
}
</style>
