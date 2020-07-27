<template>
  <div class="discover">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <CardA
      v-for="project in projects"
      :key="project.title"
      :project="project"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import CardA from '@/components/base/CardA.vue';

export default {
  name: 'Home',
  computed: mapGetters(['projects']),
  data: () => ({}),
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
