<template>
  <button @click="showSomething()">Show</button>

  <input type="text" ref="inputElement" v-if="showElement">
</template>

<script>
export default {
  data: () => ({
    showElement: false
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
