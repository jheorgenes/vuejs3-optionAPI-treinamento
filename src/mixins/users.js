import http from '@/services/http.js';
import { computed } from 'vue';


export default {
  data: () => ({ usersData: [] }),
  async mounted() {
    console.log('Chamou dentro do mounted do mixin users');
    this.usersData = await this.getUsers();
  },
  computed: {
    getTotalUser() {
      return this.usersData.length;
    }
  },
  methods: {
    async getUsers() {
      try {
        const { data } = await http.get('/api/users');
        return data;
      } catch (error) {
        console.log(error.response.data);
      }
    }
  }
}