<template>
  <section id="admin-page">
    <div class="redirectToMain">
      <router-link to="/">Home</router-link>
    </div>
    <div class="navigation">
      <h1 class="naming">Страница Администратора</h1>
      <button @click="showAddCard">Добавить вакансию</button>
      <button @click="showDirects">Посмотреть отклики</button>
      <button @click="showData">Мои вакансии</button>
    </div>
    <div class="add-card" v-if="add_card_show">
      <h2 class="naming2">Добавить вакансию</h2>
      <add-card />
    </div>
    <div class="directs" v-if="directs_show">
      <h2 class="naming2">Отклики</h2>
      <direct-list :directs="directs" />
    </div>
    <div class="data" v-if="data_show">
      <h2 class="naming2">Список вакансий</h2>
      <card-list :cards="data" />
    </div>
  </section>
</template>

<script>
import { data } from '@/data.js'
import { directs } from '@/directs.js'
import CardList from '@/components/CardList.vue'
import DirectList from '@/components/DirectList.vue'
import AddCard from '@/components/AddCard.vue'

export default {
  name: 'AdminPage',
  components: {
    CardList,
    DirectList,
    AddCard
  },
  mounted() {
    console.log(this.directs)
  },
  methods: {
    showAddCard() {
      this.data_show = false
      this.directs_show = false
      this.add_card_show = true
    },
    showDirects() {
      this.data_show = false
      this.directs_show = true
      this.add_card_show = false
    },
    showData() {
      this.data_show = true
      this.directs_show = false
      this.add_card_show = false
    }
  },
  data() {
    return {
      data: data,
      directs: directs,
      directs_show: false,
      data_show: true,
      add_card_show: false
    }
  }
} 
</script>

<style scoped>
.redirectToMain {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 0 0 10px 0;
  border: 2px solid #000;
  cursor: pointer;
}

.redirectToMain:hover {
  background-color: #f70a0a;
  color: #fff;
}

.redirectToMain a {
  text-decoration: none;
  color: #000;
}

.navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 20px;
}

.navigation button {
  margin: 10px;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 10px;
  font-size: 15px;
  background-color: #fff;
  cursor: pointer;
  width: 200px
}

.navigation button:hover {
  background-color: #f70a0a;
  color: #fff;
}

.naming {
  text-align: center;
  color: azure;
  text-shadow: 0 0 10px #000;
  font-size: 30px;
}

#admin-page {
  height: 100%;
  min-height: 100vh;
}

.naming2 {
  text-align: center;
  color: azure;
  text-shadow: 0 0 10px #000;
  font-size: 50px;
}

@media screen and (max-width: 768px) {
  .navigation {
    flex-direction: column;
  }

  .navigation button {
    width: 50%;
    margin: 5px 0px;
  }

  .navigation button:hover {
    background-color: #f70a0a;
    color: #fff;
  }

  .naming {
    font-size: 20px;
  }

  .naming2 {
    font-size: 30px;
  }
}
</style>
```
