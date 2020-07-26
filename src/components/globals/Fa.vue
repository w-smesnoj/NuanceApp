<template>
  <i :class="`fa fa-${fa}`" aria-hidden="true"></i>
</template>

<script>
export default {
  props: {
    fa: String,
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
