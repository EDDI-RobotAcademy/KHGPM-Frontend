<template>
  <!-- 
   app : layout 의 일부 구성 요소가 되도록 함(화면에 고정시키는 역할, 동적으로 콘텐츠 크기 자동 조정)
   inset : 응용 프로그램의 기본 콘텐츠 삽입과 일치하도록 바닥글의 왼쪽과 오른쪽에 여백을 추가하는 역할 -> 사이즈 맞춰서 정렬
   padless : 기본 패딩을 제거하는 역할
    -->
  <v-footer app inset padless class="justify-center pl-0">
   <v-card flat class="text-center" width="100%">
      <v-card-text>
         <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
               {{ icon }}
            </v-icon>
         </v-btn>
      </v-card-text>
      <v-card-text class="pt-0">
         방구석 집돌이
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
         {{ new Date().getFullYear() }} -
         <strong>EDDI</strong>
      </v-card-text>
   </v-card>
  </v-footer>
</template>

<script>
export default {
   name:"Footer",
   data:() => ({
      icons: [
         "mdi-facebook",
         "mdi-twitter",
         "mdi-google",
         "mdi-linkedin",
         "mdi-instagram",
      ]
   })
}
</script>

<style>

</style>