<template>
  <section id="card-list">
    <div v-for="direct in directs" :key="direct.id">
      <direct-item :key="direct.id" :direct="direct" />
    </div>
  </section>
</template>

<script>
import DirectItem from './DirectItem.vue'

export default {
  name: 'DirectList',
  components: {
    DirectItem
  },
  props: {
    directs: {
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
