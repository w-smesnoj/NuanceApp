<template>
  <i :class="`fa fa-${fa}`" aria-hidden="true" v-if="fa"></i>
  <i :class="`fas fa-${fas}`" aria-hidden="true" v-else></i>
</template>

<script>
export default {
  props: {
    fa: String,
    fas: String,
  },
  mounted() {
    // console.log(this.fa);
  },
};
</script>

<style scoped>
/* i {
  font-size: 1.5em;
} */
</style>
