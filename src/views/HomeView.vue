<template>
  <button @click="increment">Add</button>
  {{ count }}
  <hr>
  <ul>
    <li v-for="(user, index) in usersData" :key="index">{{ user.firstName }}</li>
  </ul>
  {{ getTotalUser }}
  <hr>
  {{ name }}
</template>

<script>
import count from '@/mixins/count.js';
import users from '@/mixins/users.js';

export default {
  data: () => ({ name: 'Jheorgenes' }),
  mixins: [ 
    count, 
    users 
  ],
  mounted() {
    console.log('Chamou o mounted do componente HomeView');
  }
}
</script>
