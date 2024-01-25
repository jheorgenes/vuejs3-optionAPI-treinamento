<template>
  <button @click="openModal = true">Abrir Modal</button>

  <template v-if="openModal">
    <Modal>
      <template #header>
        <h2>Header do Modal</h2>
      </template>

      <template #default>Valor Default</template>

      <template #footer>
        Footer do Modal
      </template>
    </Modal>
  </template>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal
  },
  data: () => ({
    openModal: false,
    countComputed: 0,
    countFunction: 0,
    user: {
      firstName: 'Alexandre',
      lastName: 'Cardoso'
    },
    users: [
      {
        firstName: 'Alexandre',
        is_Admin: 1
      },
      {
        firstName: 'Maria',
        is_Admin: 0
      },
      {
        firstName: 'João',
        is_Admin: 1
      },
      {
        firstName: 'Pedro',
        is_Admin: 0
      }
    ]
  }),
  computed: {
    fullname() {
      return this.user.firstName + ' ' + this.user.lastName;
    },
    usersIsNotAdmin() {
      return this.users.filter((user) => user.is_Admin === 0);
    },
    computedCount() {
      console.log('called computed');
      return this.countComputed;
    }
  },
  methods: {
    funtionCount() {
      console.log('called function');
      return this.countFunction;
    }
  }
}
</script>

