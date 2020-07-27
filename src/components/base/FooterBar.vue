<template>
  <footer>
    <div class="center">
      <div class="link simple">
        <router-link to="/">
          <div><fa fa="home" /> <span>Home</span></div>
        </router-link>
        <router-link to="/about">
          <div><fa fa="compass" /><span>Discover</span></div>
        </router-link>
        <router-link to="/search">
          <div><fa fa="search" /><span>Search</span></div>
        </router-link>
        <router-link to="/feed">
          <div><fa fa="heart" /><span>Feed</span></div>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  computed: {},
  methods: {},
};
</script>

<style scoped>
footer {
  height: 60px;
  background: var(--bg-alt);
  border-top: 1px solid var(--txt-accent);
}
.center {
  height: 100%;
}
.link {
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  grid-auto-columns: 1fr 1fr 1fr;
  font-size: 0.85em;
  height: 100%;
}
.link a {
  width: 100%;
  height: 100%;
}
.link a div {
  display: grid;
  grid-auto-rows: 1fr auto;
  height: 100%;
  padding: 5px;
  /* margin: 10px; */
  justify-items: center;
  align-items: center;
  box-sizing: border-box;
}
.link a div i {
  font-size: 1.5em;
}
.simple a div {
  grid-auto-rows: 1fr 0;
  overflow: hidden;
  /* padding: 20px; */
}
.simple a div span {
  display: none;
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
