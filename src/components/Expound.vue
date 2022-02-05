<template>
  <div class="content p3">
    <div v-if="hasContent">
      <h2 class="title-label">Expound</h2>
      <div v-for="(expound, i) in items" :key="i" class="expound">
        <div
          v-for="(text, level) in expound"
          :key="level"
          class="expound-entry"
          :class="[level]"
        >
          <p class="opacity40 font-2">{{ level }}</p>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>

    <p v-if="!hasContent" class="empty-state">This is not complete</p>
  </div>
</template>

<script>
export default {
  name: 'Expound',
  props: ['items'],
  computed: {
    hasContent() {
      return this.items?.[0]?.one
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/app';

.expound {
  @extend .m4-bottom;
  border-bottom: dashed #ffffff33 8px;
  .expound-entry {
    position: relative;
    @extend .shadow-deep;
    border-left: solid 4px #00000077;
    @extend .p2;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    margin-bottom: 3px;
    &.consideration {
      @extend .bg-hi;
    }
    &.one {
      background-color: #6fffe9;
      color: #333;
    }
    &.two {
      background-color: #bee0c1;
      color: #303;
    }
    &.three {
      background-color: #eb5160;
      color: #ffefef;
    }
    &.four {
      background-color: #5d2347;
      color: #ededed;
    }
    & > * {
      max-width: 800px;
      margin: auto;
    }
  }
}
</style>
