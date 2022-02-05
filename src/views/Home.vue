<template>
  <div class="home v-fill flex-column">
    <navigation />

    <div v-if="study" class="flex-one p4-top scrolly">
      <text-outline class="textoutline p0-bottom z2" :highlight="highlight" />
      <hanging-tabs :items="observations" v-model="observation" />

      <component :is="componentFor('observation')" :items="observationItems" />

      <hr class="border-primary" />

      <div class="card no-left-border m0-bottom z1">
        <div class="content p1">
          <h2 class="primary uppercase">Main Point</h2>
          <p class="primary">{{ study.interpret.mainPoint || '---' }}</p>
        </div>
      </div>
      <hanging-tabs :items="interpretations" v-model="interpretation" />

      <component
        :is="componentFor('interpretation')"
        :items="interpretationItems"
      />

      <hr class="border-primary" />

      <div class="card no-left-border m0-bottom z1">
        <div class="content p1">
          <h2 class="primary uppercase">Application</h2>
          <p>
            What does this passage have to do with you or those who are in your
            care? Be specific, bear fruit.
          </p>
        </div>
      </div>
      <hanging-tabs :items="applications" v-model="application" />

      <transition name="fade-in">
        <div>
          <component
            :is="componentFor('application')"
            :items="applicationItems"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Nav'
import TextOutline from '@/components/TextOutline'
import HangingTabs from '@/components/HangingTabs'
import Persons from '@/components/Persons'
import Dynamic from '@/components/Dynamic'
import Unwisdom from '@/components/Unwisdom'
import Expound from '@/components/Expound'
import Conversation from '@/components/Conversation'
import ActsQuestions from '@/components/ActsQuestions'
import Integrity from '@/components/Integrity'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  data() {
    return {
      observation: 'persons',
      interpretation: 'unwisdom',
      application: 'conversation',
    }
  },
  components: {
    Navigation,
    TextOutline,
    HangingTabs,
    Persons,
    Dynamic,
    Unwisdom,
    Expound,
    Conversation,
    ActsQuestions,
    Integrity,
  },
  computed: {
    ...mapGetters(['study', 'text', 'score']),
    observations() {
      return Object.keys(this.study.observe).filter((a) =>
        this.shouldShow('observe', a),
      )
    },
    interpretations() {
      return Object.keys(this.study.interpret)
        .filter((a) => !['mainPoint'].includes(a))
        .filter((a) => this.shouldShow('interpret', a))
    },
    applications() {
      return Object.keys(this.study.application).filter((a) =>
        this.shouldShow('application', a),
      )
    },
    highlight() {
      const highlight =
        this.observation === 'definitions'
          ? Object.keys(this.study.observe.definitions || {})
          : this.study.observe[this.observation]
      return Array.isArray(highlight) ? highlight : []
    },
    observationItems() {
      return this.study.observe[this.observation]
    },
    interpretationItems() {
      return this.study.interpret[this.interpretation]
    },
    applicationItems() {
      return this.study.application[this.application]
    },
  },
  watch: {
    study() {
      this.$nextTick(() => {
        this.observation = this.shouldShow('observe', this.observation)
          ? this.observation
          : 'persons'
        this.interpretation = this.shouldShow('interpret', this.interpretation)
          ? this.interpretation
          : 'keywords'
        this.application = this.shouldShow('application', this.application)
          ? this.application
          : 'conversation'
      })
    },
  },
  methods: {
    shouldShow(category, activity) {
      return this.study?.[category][activity] !== 'N/A'
    },
    componentFor(category) {
      if (category === 'observation') {
        return (
          {
            persons: 'Persons',
          }[this.observation] || 'Dynamic'
        )
      } else if (category === 'interpretation') {
        return (
          {
            mainPoint: 'div',
            unwisdom: 'Unwisdom',
            expound: 'Expound',
          }[this.interpretation] || 'Dynamic'
        )
      } else if (category === 'application') {
        return (
          {
            conversation: 'Conversation',
            ACTS: 'ActsQuestions',
            integrity: 'Integrity',
          }[this.application] || 'Dynamic'
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/app';

.home {
  position: relative;
}
.no-left-border {
  border-left: none;
}
</style>
