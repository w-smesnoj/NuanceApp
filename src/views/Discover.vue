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
.discover {
  padding: 1.3em;
}
.home div {
  margin-bottom: 1.5em;
}
</style>
