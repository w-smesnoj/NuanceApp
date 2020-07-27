<template>
  <div class="cardA">
    <router-link to="/project">
      <div class="card">
        <div class="bg" ref="bg"></div>
        <span>
          {{ project.title }}
        </span>
      </div>
    </router-link>
    <div class="info">
      <span>
        <div class="profile" ref="profile"></div>
        <router-link to="/profile">
          <!-- <span> -->
          {{ project.author }}
          <!-- </span> -->
          <!-- <div><fa fa="compass" /> Discover</div> -->
        </router-link>
      </span>
      <div>
        <div><fa fas="thumbs-up" />{{ formatK(project.likes) }}</div>
        <div><fa fas="eye" /> {{ formatK(project.views) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  mounted() {
    let thumbnail = this.$refs.bg;
    thumbnail.style.backgroundImage = `url('${this.project.thumbnail}')`;
    let profile = this.$refs.profile;
    profile.style.backgroundImage = `url('${this.project.profile_image}')`;
  },
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
.cardA {
  max-width: 350px;
}
.card {
  position: relative;
  border-radius: 0.25em;
  overflow: hidden;
}

.card:hover span {
  opacity: 1;
}
.card span {
  position: absolute;
  bottom: 0px;
  /* height: 25%; */
  background: black;
  color: white;
  display: flex;
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
  background: red;
  border-radius: 100px;
}
.profile {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.bg {
  width: 100%;
  background: red;
  padding-bottom: 78%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
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
