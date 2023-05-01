<template>
  <section id="card-page" class="card-page">
    <div class="item">
      <label for="name">Должность</label>
      <my-input v-model="name" name="name" placeholder="Введите ваше имя" />
    </div>
    <div class="item">
      <label for="description">Описание</label>
      <my-input v-model="description" name="description" placeholder="Введите должность" />
    </div>
    <div class="item">
      <label for="image">Ссылка на картинку</label>
      <my-input v-model="image" name="image" placeholder="Введите ссылку на картинку" />
    </div>
    <div class="item">
      <label for="salary_start">Минимальная ЗП</label>
      <my-input v-model="salary_start" name="salary_start" placeholder="Введите минимальную зарплату" />
    </div>
    <div class="item">
      <label for="salary_end">Максимальная ЗП</label>
      <my-input v-model="salary_end" name="salary_end" placeholder="Введите максимальную зарплату" />
    </div>
    <div class="item">
      <label for="education">Образование</label>
      <my-input v-model="education" name="education" placeholder="Введите образование" />
    </div>
    <div class="item">
      <label for="experience">Опыт работы</label>
      <my-input v-model="experience" name="experience" placeholder="Введите опыт работы" />
    </div>
    <div class="item">
      <label for="requirements">Требования</label>
      <my-input v-model="requirements" name="requirements" placeholder="Введите требования" />
    </div>
    <div class="item">
      <label for="duties">Обязанности</label>
      <my-input v-model="duties" name="duties" placeholder="Введите обязанности" />
    </div>
    <div class="item">
      <label for="conditions">Условия</label>
      <my-input v-model="conditions" name="conditions" placeholder="Введите условия" />
    </div>
    <div class="item">
      <label for="contacts">Контакты</label>
      <my-input v-model="contacts" name="contacts" placeholder="Введите контакты" />
    </div>
    <div class="item">
      <label for="address">Адрес</label>
      <my-input v-model="address" name="address" placeholder="Введите адрес" />
    </div>
    <div class="item">
      <label for="schedule">График работы</label>
      <my-input v-model="schedule" name="schedule" placeholder="Введите график работы" />
    </div>
    <div class="item">
      <label for="type">Тип занятости</label>
      <my-input v-model="type" name="type" placeholder="Введите тип занятости" />
    </div>
    <div class="item">
      <label for="category">Категория</label>
      <my-input v-model="category" name="category" placeholder="Введите категорию" />
    </div>
    <div class="item">
      <label for="company">Компания</label>
      <my-input v-model="company" name="company" placeholder="Введите компанию" />
    </div>
    <div class="item">
      <label for="city">Город</label>
      <my-input v-model="city" name="city" placeholder="Введите город" />
    </div>

    <div class="validator">
      <p v-if="name.length < 3">Имя должно быть больше 3 символов</p>
      <p v-else-if="description.length < 3">Должность должна быть больше 3 символов</p>
      <p v-else-if="image.length < 3">Вставьте ссылку на картинку</p>
      <p v-else-if="salary_start.length < 3">Минимальная зарплата должна быть больше 3 символов</p>
      <p v-else-if="salary_end.length < 3">Максимальная зарплата должна быть больше 3 символов</p>
      <p v-else-if="education.length == ''">Укажите образование</p>
      <p v-else-if="experience.length == ''">Укажите опыт работы</p>
      <p v-else-if="requirements.length == ''">Укажите требования</p>
      <p v-else-if="duties.length == ''">Укажите обязанности</p>
      <p v-else-if="conditions.length == ''">Укажите условия</p>
      <p v-else-if="contacts.length == ''">Укажите контакты</p>
      <p v-else-if="address.length == ''">Укажите адрес</p>
      <p v-else-if="schedule.length == ''">Укажите график работы</p>
      <p v-else-if="type.length == ''">Укажите тип занятости</p>
      <p v-else-if="category.length == ''">Укажите категорию</p>
      <p v-else-if="company.length == ''">Укажите компанию</p>
      <p v-else-if="city.length == ''">Укажите город</p>
      <div class="button-action" v-else>
        <button @click="appendCard">Откликнуться</button>
      </div>
    </div>




  </section>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue'
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
    appendCard() {
      var date = new Date()
      var id = this.createID()
      localStorage.setItem('id', id)
      localStorage.setItem('name', this.name)
      localStorage.setItem('description', this.description)
      localStorage.setItem('image', this.image)
      localStorage.setItem('salary_start', this.salary_start)
      localStorage.setItem('salary_end', this.salary_end)
      localStorage.setItem('education', this.education)
      localStorage.setItem('experience', this.experience)
      localStorage.setItem('requirements', this.requirements)
      localStorage.setItem('duties', this.duties)
      localStorage.setItem('conditions', this.conditions)
      localStorage.setItem('contacts', this.contacts)
      localStorage.setItem('address', this.address)
      localStorage.setItem('schedule', this.schedule)
      localStorage.setItem('date', date.toLocaleString())
      localStorage.setItem('type', this.type)
      localStorage.setItem('category', this.category)
      localStorage.setItem('company', this.company)
      localStorage.setItem('city', this.city)


      const card_pack = {
        id: id,
        name: this.name,
        description: this.description,
        image: this.image,
        salary_start: this.salary_start,
        salary_end: this.salary_end,
        education: this.education,
        experience: this.experience,
        requirements: this.requirements,
        duties: this.duties,
        conditions: this.conditions,
        contacts: this.contacts,
        address: this.address,
        schedule: this.schedule,
        date: date.toLocaleString(),
        type: this.type,
        category: this.category,
        company: this.company,
        city: this.city
      }

      data.push(card_pack)
      console.log(card_pack)
      this.completed = true

      this.id = ''
      this.name = ''
      this.description = ''
      this.image = ''
      this.salary_start = ''
      this.salary_end = ''
      this.education = ''
      this.experience = ''
      this.requirements = ''
      this.duties = ''
      this.conditions = ''
      this.contacts = ''
      this.address = ''
      this.schedule = ''
      this.type = ''
      this.category = ''
      this.company = ''
      this.city = ''
      this.date = ''

      this.$router.push('/admin')
    }
  },
  data() {
    return {
      id: '',
      name: '',
      description: '',
      image: '',
      salary_start: '',
      salary_end: '',
      education: '',
      experience: '',
      requirements: '',
      duties: '',
      conditions: '',
      contacts: '',
      address: '',
      schedule: '',
      type: '',
      category: '',
      company: '',
      city: '',
      date: '',

      completed: false
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

@media (max-width: 768px) {
  .card-page {
    padding: 20px;
  }

  .item {
    width: 100%;
  }

  .button-action {
    width: 100%;
  }

  .info {
    width: 100%;
  }

  .validator {
    width: 100%;
  }

  .validator p {
    font-size: 20px;
  }

  .item input {
    margin-top: 0;
  }

}
</style>
```
