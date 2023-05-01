<template>
  <section id="card-item">

    <div class="title">
      <h2>{{ card_item.name }}</h2>
      <p>{{ card_item.id }}</p>
    </div>

    <div class="image">
      <img :src="card_item.image" :alt="card_item.name" />
    </div>

    <div class="description">
      <p>{{ card_item.description }}</p>
    </div>

    <div class="label">
      <p>Требования</p>
    </div>

    <div class="requirements">
      <div class="item">
        <i class="fa fa-graduation-cap"></i>
        <p>Образование: <i>{{ card_item.education }}</i></p>
      </div>

      <div class="item">
        <i class="fa fa-briefcase"></i>
        <p>Опыт работы: <i>{{ card_item.experience }}</i></p>
      </div>

      <div class="item">
        <i class="fa fa-gear"></i>
        <p>Навыки: <i>{{ card_item.requirements }}</i></p>
      </div>

    </div>

    <div class="label">
      <p>Условия</p>
    </div>

    <div class="duties">
      <div class="item">
        <i class="fa fa-legal"></i>
        <p>Обязанности: <i>{{ card_item.duties }}</i></p>
      </div>
      <div class="item">
        <i class="fa fa-balance-scale"></i>
        <p>Условия: <i>{{ card_item.conditions }}</i></p>
      </div>

    </div>

    <div class="label">
      <p>Контакты</p>
    </div>

    <div class="contacts">
      <div class="item">
        <i class="fa fa-phone"></i>
        <p>Контакты: <i>{{ card_item.contacts }}</i></p>
      </div>
      <div class="item">
        <i class="fa fa-map-marker"></i>
        <p>Город: <i>{{ card_item.city }}</i></p>
      </div>
      <div class="item">
        <i class="fa fa-globe"></i>
        <p>Кампания: <i>{{ card_item.company }}</i></p>
      </div>

    </div>

    <div class="label">
      <h1>Зарплатная ставка</h1>
    </div>

    <div class="salary">
      <p>{{ card_item.salary_start }}</p>
      <p>-</p>
      <p>{{ card_item.salary_end }}</p>
      <p>тг</p>
    </div>


    <div class="button-action">
      <button @click="redirectToDirect">Откликнуться</button>
    </div>

    <div class="end">
      <p>{{ card_item.category }}</p>
      <p>{{ card_item.date }}</p>
    </div>


  </section>
</template>

<script>
export default {
  name: 'CardItem',
  components: {
  },
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    redirectToDirect() {
      this.$router.push(`/direct/${this.card_item.id}`)
    }
  },
  data() {
    return {
      card_item: this.card
    }
  }
}
</script>

<style scoped>
#card-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px 15px;
  margin: 10px;
  width: 600px;
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-family: 'Montserrat', sans-serif;
  background-color: azure;

}

.image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border: 1px solid #ccc;
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
}

.title p {
  font-size: 25px;
  font-weight: 400;
  margin: 0;
}

.salary {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
}

.requirements p {
  margin-top: 5px;
  font-size: 15px;
  font-weight: 700;
}

.requirements p i {
  font-weight: 400;
  font-style: normal;
}

.end {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.end p {
  font-size: 15px;
  font-weight: 700;
  color: gray;
}

.end p:last-child {
  font-weight: 400;
  color: rgb(189, 189, 189);
  font-style: italic;
}

.label {
  margin-top: 25px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
}

.item p {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
}

.item p i {
  font-weight: 400;
  font-style: normal;
}

.item .fa {
  font-size: 18px;
  margin-right: 10px;
  margin-top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  color: #799ff1;
}

.button-action button {
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #799ff1;
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  outline: none;
}

.button-action button:hover {
  background-color: #6b8fd6;
}

.button-action {
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  #card-item {
    width: 95%;
    height: 100%;
    margin: 20px auto;
  }

  .image img {
    height: 200px;
  }

  .title {
    flex-direction: column;
    align-items: flex-start;
  }

  .title h2 {
    font-size: 15px;
  }


}
</style>
