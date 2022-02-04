<template>
  <div>
    <div class="content p2">
      <div v-for="(questions, category) in items" :key="category">
        <h3 class="uppercase "><span class="bg-hi p1-h opacity90">{{category}}</span></h3>
        <div v-for="(q, i) in questions" :key="i" class="card m2-bottom">
          • {{q}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActsQuestions',
  props: ['items']
}
</script>

<style lang="scss" scoped>
@import "../assets/app";
</style>
