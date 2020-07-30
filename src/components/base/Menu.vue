<template>
  <aside :class="classObject">
    <!-- <transition name="slide"> -->
    <div class="menu" :class="[sidebar_toggle ? 'sidebarShow' : '']">
      <!-- v-if="sidebar_toggle" -->
      <div class="links">
        <a @click="toggleSidebar">
          <div><fa fa="times" /></div>
        </a>
      </div>

      <div class="links" ref="links">
        <router-link to="/">
          <div><fa fa="home" />Home</div>
        </router-link>
        <router-link to="/discover">
          <div><fa fa="compass" />Discover</div>
        </router-link>
        <router-link to="/about">
          <div><fa fa="info" />About</div>
        </router-link>
        <router-link to="/settings">
          <div><fa fa="gear" />Settings</div>
        </router-link>
      </div>
      <div class="seperator"></div>
      <div class="links">
        <a>
          <div><fa fa="sign-out" />Logout</div>
        </a>
        <a>
          <div><fa fa="align-left" />TOU</div>
        </a>
        <a>
          <div><fa fa="user-secret" />Privacy</div>
        </a>
        <a>
          <div><fa fa="comments" />Community</div>
        </a>
        <a>
          <div><fa fa="plus" />More Nuance <fa fa="caret-down" /></div>
        </a>
        <a>
          <div><fa fa="globe" />English <fa fa="caret-down" /></div>
        </a>
      </div>

      <!-- <h1>First One</h1>
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, alias
        velit. Ex eum pariatur asperiores blanditiis delectus aperiam cupiditate
        provident quidem reiciendis odit, commodi vero cum quaerat laudantium,
        dolor vitae fugit nisi illum facilis iusto saepe hic eveniet distinctio!
        Odit?
      </p>
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, alias
        velit. Ex eum pariatur asperiores blanditiis delectus aperiam cupiditate
        provident quidem reiciendis odit, commodi vero cum quaerat laudantium,
        dolor vitae fugit nisi illum facilis iusto saepe hic eveniet distinctio!
        Odit?
      </p>
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, alias
        velit. Ex eum pariatur asperiores blanditiis delectus aperiam cupiditate
        provident quidem reiciendis odit, commodi vero cum quaerat laudantium,
        dolor vitae fugit nisi illum facilis iusto saepe hic eveniet distinctio!
        Odit?
      </p>
      <h4>Title</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, alias
        velit. Ex eum pariatur asperiores blanditiis delectus aperiam cupiditate
        provident quidem reiciendis odit, commodi vero cum quaerat laudantium,
        dolor vitae fugit nisi illum facilis iusto saepe hic eveniet distinctio!
        Odit?
      </p>
      <h1>Last One</h1> -->
    </div>
    <!-- </transition> -->

    <transition name="fade">
      <div class="bg" v-if="sidebar_toggle" @click="toggleSidebar"></div>
    </transition>
  </aside>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Menu',
  computed: {
    ...mapGetters(['sidebar_toggle']),
    classObject: function() {
      return {
        active: this.sidebar_toggle,
      };
    },
  },
  mounted() {
    // let elms = document.querySelector('.links');
    console.log(this.$refs.links);
    this.$refs.links.childNodes.forEach((link) => {
      link.addEventListener('click', this.toggleSidebar);
    });
  },

  methods: {
    ...mapActions(['toggleSidebar']),
  },
};
</script>

<style scoped>
.links a div i {
  place-self: center;
}
.links a div {
  align-items: center;

  padding: 15px;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 2em 1fr;
  grid-template-columns: 2em 1fr;
  gap: 1em;
}
.seperator {
  width: -webkit-fill-available;
  height: 1px;
  margin: 1em;
  box-sizing: border-box;
  background: var(--txt-accent);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s cubic-bezier(0.42, 0, 0.58, 1);
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-350px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.sidebarShow {
  left: 0% !important;
}
.menu {
  width: auto;
  box-sizing: border-box;
  max-width: 350px;
  color: white;
  background-color: var(--bg-alt);
  z-index: 200;
  padding-top: 1em;
  box-sizing: border-box;
  padding-bottom: 50vh;
  overflow-y: scroll;
  left: -350px;
  position: relative;
  transition: left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.bg {
  grid-column: 1/2;
  position: fixed;
  height: 100%;
  /* overflow: scroll; */
  width: 100%;
  background: #191919cc;
}
aside {
  display: grid;
  grid-auto-columns: auto 1fr;
  overflow: auto;
  grid-row: 2/2;
  grid-column: 1;
  z-index: 100;
  width: 100%;
  height: 100%;
  pointer-events: none;
  box-sizing: border-box;
  position: fixed;
}
.active {
  pointer-events: all !important;
}
/* #menu {
  height: 100%;
  max-width: 350px;
  background-color: var(--bg-alt);
} */

a:hover,
a.router-link-exact-active {
  color: var(--txt-main-od);
}
a {
  color: var(--txt-accent);
}

.menu::-webkit-scrollbar {
  width: 0.4em;
}

.menu::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.menu::-webkit-scrollbar-thumb {
  border-radius: 1em;
  background-color: var(--txt-accent);
  outline: 1px solid slategrey;
}
</style>
