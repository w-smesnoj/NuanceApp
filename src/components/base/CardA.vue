<template>
  <transition appear name="slide-fade" mode="out-in">
    <div class="cardA" v-if="project.title === '#'" key="1">
      <div class="card ">
        <div class="bg animation"></div>
      </div>
      <div class="info skeleton">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="cardA" v-else key="2">
      <router-link to="/project">
        <div class="card">
          <div
            class="bg"
            ref="bg"
            :style="`background-image: url(${project.thumbnail})`"
          ></div>
          <span>
            {{ project.title }}
            <div class="simple" v-if="simple">
              <span> {{ project.author }} </span>
              <div><fa fas="thumbs-up" />{{ formatK(project.likes) }}</div>
              <div><fa fas="eye" /> {{ formatK(project.views) }}</div>
            </div>
          </span>
        </div>
      </router-link>
      <div class="info" v-if="!simple">
        <span>
          <div
            class="profile"
            ref="profile"
            :style="`background-image: url(${project.profile_image})`"
          ></div>
          <router-link to="/profile">
            {{ project.author }}
          </router-link>
        </span>
        <div>
          <div><fa fas="thumbs-up" />{{ formatK(project.likes) }}</div>
          <div><fa fas="eye" /> {{ formatK(project.views) }}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    project: Object,
    simple: Boolean,
  },
  mounted() {},
  computed: {},
  methods: {
    formatK(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num);
    },
  },
  components: {},
};
</script>

<style>
@media only screen and (max-width: 500px) {
  .card span {
    opacity: 1 !important;
  }
}
</style>

<style scoped>
/* Skeleton */
.slide-fade-leave-active,
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(5px) scale(0.98);
  opacity: 0;
}
@keyframes slidetounlock {
  0% {
    background-position: 0% 0;
  }
  100% {
    background-position: 200% 0%;
  }
}
.skeleton div,
.animation {
  background: rgb(242, 242, 242);
  background: linear-gradient(
    297deg,
    rgba(235, 235, 235, 1) 25%,
    rgba(255, 255, 255, 1) 50%,
    rgba(235, 235, 235, 1) 75%
  );
  border-radius: 4px;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: slidetounlock 1s infinite;
  animation-direction: reverse;
  background-size: 200% 200% !important;
  background-repeat: repeat !important;
}
.skeleton {
  grid-auto-columns: auto 2fr 1fr !important;
  gap: 1em !important;
}
.skeleton div:first-child {
  width: 1.4em;
}
.skeleton div {
  height: 1.4em;
  border-radius: 100px;
}
</style>

<style scoped>
.card {
  position: relative;
  border-radius: 0.25em;
  overflow: hidden;
}

.card:hover span {
  opacity: 1;
}
.card > span {
  position: absolute;
  bottom: 0px;
  width: -webkit-fill-available;
  background: black;
  color: white;
  display: grid;
  align-items: flex-end;
  padding: 1em;
  padding-top: 3em;
  font-weight: bold;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
  transition: opacity 0.2s;
}
.profile {
  width: 1.4em;
  height: 1.4em;
  background: gray;
  border-radius: 100px;
}
.profile {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.bg {
  width: 100%;
  padding-bottom: 78%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.simple {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1em;
  font-weight: 400;
  font-size: 0.8em;
  height: 1.8em !important;
  align-content: flex-end !important;
}
.simple div {
  color: white !important;
  display: grid;
  grid-auto-flow: column;
  gap: 0.8em;
}
.simple span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr auto;
  gap: 1.3em;
  font-size: 0.9em;
  /* margin: 0.5em 0em; */
  font-weight: 500;
  height: 3em;
  align-content: center;
}
.info span:first-child:hover {
  text-decoration: underline;
}
.info span:first-child {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr;
  align-items: center;
  gap: 0.65em;
}
.info span a {
  flex: 1;
  max-width: calc(404px - 130px);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--txt-main);
}
.info div {
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  color: var(--txt-accent-dark);
  font-weight: 500;
  font-size: 0.95em;
  place-items: center;
}
.info div div {
  gap: 0.4em;
}
/* .thumbnail {
} */
</style>
