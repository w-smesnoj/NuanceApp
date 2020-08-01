<template>
  <button
    class="default"
    :class="{ round: round, rounded: rounded, white: white, link: link }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    round: Boolean,
    rounded: Boolean,
    white: Boolean,
    link: Boolean,
  },
};
</script>

<style scoped>
button {
  height: fit-content;
  width: fit-content;
  background-color: var(--accent);
  border: 0px;
  color: white;
  padding: 10px 18px;
}

.white {
  background-color: white;
  border: 1px solid #c5c5c5;
  color: var(--txt-main);
}
.round {
  border-radius: 100px;
  display: grid;
  place-content: center;
  padding: 1.5em;
  width: 1em;
  height: 1em;
}
.round > i {
  font-size: 1em;
}
.rounded {
  border-radius: 100px;
}
.link {
  background-color: transparent;
  font-weight: 600;
  border: 0px;
  color: #0057ff;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  text-transform: none;
  overflow: visible;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  letter-spacing: 0.03em;
}
</style>
