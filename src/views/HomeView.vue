<template>
  <button @click="showSomething()">Show</button>

  <!-- <teleport to="#input">
    <input type="text" ref="inputElement">
  </teleport> -->

  <button @click="open = !open">Open Modal</button>

  <teleport to="#modal">
    <Modal v-if="open">
      qualquer coisa aqui dentro do modal.
    </Modal>
  </teleport>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
  components: {
    Modal
  },
  data: () => ({
    showElement: false,
    open: false
  }),
  methods: {
    // $nextTick permite trabalhar de forma assincrona
    async showSomething() {
      this.showElement = true;
      // Colocando o foco no input

      // Usando o $nextTick
      // O $nextTick pega os elementos do dom de forma atualizada
      await this.$nextTick(() => {
        this.$refs.inputElement.focus();
        console.log('focus');
      })
      console.log('carregou');

      // Sem usar o $nextTick
      // setTimeout(() => {
      //   console.log(this.$refs.inputElement);
      //   this.$refs.inputElement.focus();
      // }, 1000);
    }
  }
}
</script>

<style>
#app {
  color: red;
}
</style>
