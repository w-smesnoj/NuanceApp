<template>
  <div class="discover">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <CardA
      v-for="project in projects"
      :key="project.likes"
      :project="project"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
import CardA from '@/components/base/CardA.vue';

export default {
  name: 'Home',
  computed: mapGetters(['projects']),
  mounted() {
    this.getProjects();
  },
  data: () => ({}),
  methods: {
    ...mapActions(['getProjects']),
  },
  components: {
    CardA,
  },
};
</script>

<style scoped>
@media only screen and (min-width: 2100px) {
  .discover {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 2100px) {
  .discover {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 1700px) {
  .discover {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 1300px) {
  .discover {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media only screen and (max-width: 900px) {
  .discover {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 700px) {
  .discover {
    grid-template-columns: 1fr;
    max-width: 350px;
    margin: auto;
  }
}
.discover {
  padding: 1.3em;
  display: grid;
  gap: 1em;
}
.home div {
  margin-bottom: 1.5em;
}
</style>
