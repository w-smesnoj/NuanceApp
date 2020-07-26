<template>
  <aside :class="classObject">
    <transition name="slide">
      <div class="menu" v-if="sidebar_toggle">
        <h1>First One</h1>
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, alias
          velit. Ex eum pariatur asperiores blanditiis delectus aperiam
          cupiditate provident quidem reiciendis odit, commodi vero cum quaerat
          laudantium, dolor vitae fugit nisi illum facilis iusto saepe hic
          eveniet distinctio! Odit?
        </p>
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, alias
          velit. Ex eum pariatur asperiores blanditiis delectus aperiam
          cupiditate provident quidem reiciendis odit, commodi vero cum quaerat
          laudantium, dolor vitae fugit nisi illum facilis iusto saepe hic
          eveniet distinctio! Odit?
        </p>
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, alias
          velit. Ex eum pariatur asperiores blanditiis delectus aperiam
          cupiditate provident quidem reiciendis odit, commodi vero cum quaerat
          laudantium, dolor vitae fugit nisi illum facilis iusto saepe hic
          eveniet distinctio! Odit?
        </p>
        <h4>Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, alias
          velit. Ex eum pariatur asperiores blanditiis delectus aperiam
          cupiditate provident quidem reiciendis odit, commodi vero cum quaerat
          laudantium, dolor vitae fugit nisi illum facilis iusto saepe hic
          eveniet distinctio! Odit?
        </p>
        <h1>Last One</h1>
      </div>
    </transition>

    <transition name="fade">
      <div class="bg" v-if="sidebar_toggle"></div>
    </transition>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  computed: {
    ...mapGetters(["sidebar_toggle"]),
    classObject: function() {
      return {
        active: this.sidebar_toggle,
      };
    },
  },
  // methods: {
  //   ...mapActions(["toggleSidebar"]),
  // },
};
</script>

<style scoped>
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
.menu {
  width: auto;
  max-width: 350px;
  color: white;
  overflow-y: scroll;
  background-color: var(--bg-alt);
  z-index: 200;
  padding: 15px;
  box-sizing: border-box;
  padding-bottom: 50vh;
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
  height: 100%;
  width: 100%;
  pointer-events: none;
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
