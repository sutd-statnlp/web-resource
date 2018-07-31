<template>
  <div class="m-home">
    <h1>Home Page</h1>
    <ul>
      <li v-for="(item, index) in messages" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
