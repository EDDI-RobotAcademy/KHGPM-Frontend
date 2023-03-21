<template>
  <div>
    <v-row>
      <v-col v-if="!allOfProducts || (Array.isArray(allOfProducts) && allOfProducts.length === 0)">
        <p>상품이 존재하지 않습니다.</p>
      </v-col>
      <v-col v-for="(imagePath, idx) in allOfProducts" :key="idx" cols="12">
         {{ imagePath }}
      </v-col>
    </v-row>
  </div>
</template>

<script>

export default {
  name: "ProductTestListForm",

  data() {
    return {
    }
  },
  props: {
    allOfProducts: {
      type: Array,
    },
  },
  created() {

  }

}
</script>

<style>

</style>