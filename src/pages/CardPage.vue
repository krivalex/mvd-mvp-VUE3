<template>
  <section id="card-page" class="card-page">
    <div class="info">
      <h2>Вы откликаетесь на вакансию</h2>
      <p>{{ card_item.name }}</p>
    </div>
    <div class="item">
      <label for="name">Имя</label>
      <my-input v-model="name" name="name" placeholder="Введите ваше имя" />
    </div>
    <div class="item">
      <label for="surname">Фамилия</label>
      <my-input v-model="surname" name="surname" placeholder="Введите вашу фамилию" />
    </div>
    <div class="item">
      <label for="fathername">Отчество</label>
      <my-input v-model="fathername" name="fathername" placeholder="Введите ваше отчество" />
    </div>
    <div class="item">
      <label for="phone">Телефон</label>
      <my-input v-model="phone" name="phone" placeholder="Введите ваш телефон" />
    </div>
    <div class="item">
      <label for="email">Email</label>
      <my-input v-model="email" name="email" placeholder="Введите ваш email" />
    </div>
    <div class="item">
      <label for="city">Город</label>
      <my-input v-model="city" name="city" placeholder="Введите ваш город" />
    </div>
    <div class="item">
      <label for="birthday">Дата рождения</label>
      <my-input v-model="birthday" type="date" name="birthday" placeholder="Введите вашу дату рождения" />
    </div>


    <div class="validator">
      <p v-if="name == ''">Введите имя</p>
      <p v-else-if="surname == ''">Введите фамилию</p>
      <p v-else-if="fathername == ''">Введите отчество</p>
      <p v-else-if="phone == ''">Введите телефон</p>
      <p v-else-if="email == ''">Введите email</p>
      <p v-else-if="city == ''">Введите город</p>
      <p v-else-if="birthday == ''">Введите дату рождения</p>
      <div class="button-action" v-else>
        <button @click="appendDirect">Откликнуться</button>
      </div>

    </div>

  </section>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue'
import { directs } from '@/directs.js'
import { data } from '@/data.js'
export default {
  name: 'CardPage',
  components: {
    MyInput
  },
  methods: {
    createID() {
      var date = new Date()
      var components = [date.getDate(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()]

      var id = components.join('')
      return id
    },
    appendDirect() {
      var date = new Date()
      localStorage.setItem('direct_id', this.createID())
      localStorage.setItem('name', this.name)
      localStorage.setItem('surname', this.surname)
      localStorage.setItem('fathername', this.fathername)
      localStorage.setItem('phone', this.phone)
      localStorage.setItem('email', this.email)
      localStorage.setItem('city', this.city)
      localStorage.setItem('birthday', this.birthday)
      localStorage.setItem('card_id', this.$route.params.id)
      localStorage.setItem('card_name', this.card_item.name)
      localStorage.setItem('direct_time', date.toLocaleString())

      const direct_pack = {
        direct_id: localStorage.getItem('direct_id'),
        name: localStorage.getItem('name'),
        surname: localStorage.getItem('surname'),
        fathername: localStorage.getItem('fathername'),
        phone: localStorage.getItem('phone'),
        email: localStorage.getItem('email'),
        city: localStorage.getItem('city'),
        birthday: localStorage.getItem('birthday'),
        card_id: localStorage.getItem('card_id'),
        card_name: localStorage.getItem('card_name'),
        direct_time: localStorage.getItem('direct_time')
      }

      directs.push(direct_pack)
      console.log(directs)
      this.completed = true

      this.name = ''
      this.surname = ''
      this.fathername = ''
      this.phone = ''
      this.email = ''
      this.city = ''
      this.birthday = ''



      this.$router.push(`/`)
    }
  },
  data() {
    return {
      direct_id: 0,
      name: '',
      surname: '',
      fathername: '',
      phone: '',
      email: '',
      city: '',
      birthday: '',
      completed: false,

      cards: data,
      card_item: data.find(item => item.id == this.$route.params.id)

    }
  }
}
</script>

<style scoped>
.card-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  width: 100vw;
  height: 100vh;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 500px;
  margin-bottom: 20px;
}

.item label {
  text-align: center;
  color: white;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.item input {
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
}

.item input:focus {
  outline: none;
}

.button-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
}

.button-action button {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.button-action button:hover {
  background-color: #333;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin-bottom: 20px;
  text-align: center;
  color: azure;
}

.info p {
  font-size: 30px;
  color: lightgray;
  font-style: italic;
}

.validator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin-bottom: 20px;
  text-align: center;
  color: azure;
}

.validator p {
  font-size: 40px;
  color: red;
  font-style: italic;
  background-color: azure;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

@media (max-width: 600px) {
  .card-page {
    padding: 20px;
  }

  .item {
    width: 100%;
  }

  .button-action {
    width: 100%;
  }
}
</style>
```
