<template>
   <v-container>
      <div>
         <p class="blue lighten-4 red--text">Test</p>
         <p class="blue white--text">Test</p>
         <p class="teal darken-3">Test</p>
         <p class="teal lighten-1 text-center">
            Vuetify!<br>
            조만간 SOLID(Vue보다 매력적임)로 갈아탈 예정
         </p>

         <v-btn class="teal lighten-3" rounded @click="btnClick">버튼</v-btn>
         <v-btn class="purple lighten-2">
            <v-icon>mdi-battery-alert-variant-outline</v-icon>
            <span>배터리 교체</span>
         </v-btn>
      </div>

      <v-layout justify-center>
         <!-- 
            버튼을 눌렀을 때 dialosg는 true 가 된다.
            persistent -> 외부 영역을 클릭해도 dialog가 비활성화되지 않는다.
            fullscreen -> 전체 화면 전환
          -->
         <v-dialog v-model="dialog" fullscreen persistent max-width="400"> 
            <template v-slot:activator="{on}">
               <v-btn color="primary" dark v-on="on">결제</v-btn> <!-- 버튼을 눌렀을 때 v-card가 보여진다. -->
            </template>

            <v-card>
               <v-card-title class="headLine">
                  {{ name }}
               </v-card-title>
               <v-card-text>
                  텍스트1
               </v-card-text>
               <v-card-text>
                  텍스트2
               </v-card-text>
               <v-card-actions>
                  <v-spacer></v-spacer> <!-- 여백 생성 -> 이 상황에선 버튼들이 오른쪽 정렬되게 된다. -->
                  <v-btn color="teal darken-1" text @click="btnCancel">
                     취소
                  </v-btn>
                  <v-btn color="teal darken-1" text @click="btnPay">
                     승인
                  </v-btn>
               </v-card-actions>
            </v-card>
         </v-dialog>
      </v-layout>
   </v-container>
</template>

<script>
export default {
   name: "DialogTestPage",
   data() {
      return {
         name: '7박 8일 풀 패키지 여행 코스',
         dialog: false,
      }
   },
   methods: {
      btnClick() {
         alert('click()')
      },
      btnCancel() {
         alert('cancel()')
         this.dialog = false
      },
      btnPay() {
         alert('pay()')
         this.dialog = false
      }
   }

}
</script>

<style>

</style>