<template>
  <div class="dynamic">
    <div v-if="hasItems">
      <div v-if="isArray(items)">
        <block-list v-if="isString(items[0])" :items="items" />
        <div v-if="isObject(items[0])">
          <definitions
            v-for="(entry, index) in items"
            :key="index"
            :items="entry"
          />
        </div>
      </div>
      <definitions v-if="isObject(items)" :items="items" />
    </div>

    <p v-if="!hasItems" class="empty-state">This is not complete</p>
  </div>
</template>

<script>
import BlockList from './BlockList'
import Definitions from './Definitions'

export default {
  components: { BlockList, Definitions },
  name: 'Dynamic',
  props: ['items'],
  computed: {
    hasItems() {
      return this.items && !!Object.keys(this.items)
    },
  },
  methods: {
    isArray(value) {
      return Array.isArray(value)
    },
    isObject(value) {
      return !this.isArray(value) && typeof value === 'object'
    },
    isString(value) {
      return typeof value === 'string'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/app';

.definitions {
  .definition {
    @extend .border-bottom-tertiary;
    padding: 8px 0;
    &:last-child {
      border-bottom: none;
    }
  }
  h3 {
    font-family: 'times';
    line-height: 140%;
  }
}
</style>
