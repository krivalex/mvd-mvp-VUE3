<template>
  <section id="card-item">

    <div class="title">
      <h2>Отклик на вакансию:</h2>
      <p>{{ direct_item.card_name }}</p>
    </div>

    <div class="label">
      <p>Идентификация</p>
    </div>

    <div class="description">
      <p>Имя: <i>{{ direct_item.name }}</i></p>
      <p>Фамилия: <i>{{ direct_item.surname }}</i></p>
      <p>Отчество: <i>{{ direct_item.fathername }}</i></p>
      <p>Город: <i>{{ direct_item.city }}</i></p>
      <p>Дата рождения: <i>{{ direct_item.birthday }}</i></p>
    </div>

    <div class="label">
      <p>Контакты соискателя</p>
    </div>

    <div class="description">
      <p>Телефон: {{ direct_item.phone }}</p>
      <p>Email: {{ direct_item.email }}</p>
    </div>

    <div class="button-action">
      <button class="confirm" @click="confirm">Пригласить</button>
      <button class="reject" @click="reject">Отклонить</button>
    </div>

    <div class="end">
      <p>{{ direct_item.card_id }}</p>
      <p>{{ direct_item.direct_time }}</p>
    </div>


  </section>
</template>

<script>
import { directs } from '@/directs.js'
export default {
  name: 'DirectItem',
  components: {
  },
  props: {
    direct: {
      type: Object,
      required: true
    }
  },
  methods: {
    confirm() {

    },
    reject() {
      directs.splice(directs.indexOf(this.direct_item), 1)

    }
  },
  data() {
    return {
      direct_item: this.direct
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
  width: 400px;
  height: 500px;
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
  justify-content: flex-start;
  flex-direction: column;
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
  width: 45%;
  height: 50px;
  border: none;
  border-radius: 15px;
  color: white;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  outline: none;

}

.button-action {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.confirm {
  background-color: #79f183;
}

.confirm:hover {
  background-color: #6bd66b;
}

.reject {
  background-color: #f17979;
}

.reject:hover {
  background-color: #d66b6b;
}

.description {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
}

.description p {
  margin: 0;
}

.description p i {
  font-weight: 400;
  font-style: normal;
}

@media screen and (max-width: 768px) {
  #card-item {
    width: 100%;
    height: 100%;
  }

  .image img {
    height: 200px;
  }



}
</style>
