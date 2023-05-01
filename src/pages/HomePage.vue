<template>
  <section id="home-page">
    <div class="redirectToAdmin">
      <router-link to="/admin">Admin</router-link>
    </div>
    <card-list :cards="this.cards" />
  </section>
</template>

<script>
import { data } from '@/data.js'
import CardList from '@/components/CardList.vue'

export default {
  mounted() {
    this.cards = data
  },
  name: 'HomePage',
  components: {
    CardList
  },
  data() {
    return {
      cards: data
    }
  }
}
</script>

<style scoped>
.redirectToAdmin {
  position: fixed;
  top: 0;
  right: 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 0 0 0 10px;
  border: 2px solid #000;
  cursor: pointer;
}

.redirectToAdmin:hover {
  background-color: #f70a0a;
  color: #fff;
}

.redirectToAdmin a {
  text-decoration: none;
  color: #000;
}
</style>
```
