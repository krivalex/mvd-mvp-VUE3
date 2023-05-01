<template>
  <section id="card-list">
    <div v-for="card in cards" :key="card.id">
      <card-item :key="card.id" :card="card" />
    </div>
  </section>
</template>

<script>
import CardItem from './CardItem.vue'

export default {
  name: 'CardList',
  components: {
    CardItem
  },
  props: {
    cards: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
#card-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
