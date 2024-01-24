<template>
  <form action="">
    <input type="text" placeholder="FirstName" v-model="user.firstName">
    <span v-if="errors['firstName']" class="error">{{ errors['firstName'][0] }}</span><br>
    <input type="text" placeholder="LastName" v-model="user.lastName">
    <span v-if="errors['lastName']" class="error">{{ errors['lastName'][0] }}</span><br>
    <input type="text" placeholder="email" v-model="user.email">
    <span v-if="errors['email']" class="error">{{ errors['email'][0] }}</span><br>
    <input type="text" placeholder="password" v-model="user.password">
    <span v-if="errors['password']" class="error">{{ errors['password'][0] }}</span><br>
    <button @click.submit.prevent="create">Cadastrar</button>
  </form>
</template>

<script>
import http from '@/services/http';

export default {
  name: 'UserCreateView',
  data: () => ({
    user: {},
    errors: []
  }),
  methods: {
    async create() {
      try {
        const { data } = await http.post('api/user', this.user);
        console.log(data);
      } catch (error) {
        if(error.response?.data) {
          this.errors = error.response.data['errors'];
        }
        console.log(this.errors);
      }
    }
  },
}
</script>

<style scoped>
.error {
  color: red;
}
</style>