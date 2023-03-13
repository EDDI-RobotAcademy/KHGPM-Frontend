<template>
    <v-container>
      <div>
        <p class="blue lighten-4 red--text">Test</p>
        <p class="blue white--text">Test</p>
        <p class="teal darken-3">Test</p>
        <p class="teal lighten-1 text-center">
          Vuetify!!!<br>
          조만간 SOLID(Vue보다 매력적임)로 갈아탈 예정!
        </p>
 
        <v-btn class="teal lighten-3" rounded @click="btnClick">버튼</v-btn>
        <v-btn class="purple lighten-2">
          <v-icon>mdi-battery-alert-variant-outline</v-icon>
          <span>배터리 교체!</span>
        </v-btn>
      </div>
 
      <v-layout justify-center>
        <v-dialog v-model="dialog" fullscreen persistent max-width="400">
          <template v-slot:activator="{on}">
            <v-btn color="primary" dark v-on="on">결제</v-btn>
          </template>
 
          <v-card>
            <v-card-title class="headline">
              {{ name }}
            </v-card-title>
            <v-card-text>
              오늘만 날이닷! 먹고 죽엇! 할인 50% 간드앗!
            </v-card-text>
            <v-card-text>
              지금 당장 결제 하시겠습니까 ? Right now ?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="teal darken-1" text @click="btnCancel">
                  취소
              </v-btn>
              <v-btn color="teal darken-1" text @click="btnPay">
                  결제 승인
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
      data () {
          return {
              name: '7박 8일 풀 패키지 여행 코스!!!',
              dialog: false,
          }
      },
      methods: {
          btnClick () {
              alert('이거 눌럿니 ?')
          },
          btnCancel () {
              alert('100만원이 출금되었습니다! 감사합니다 호갱님!')
              this.dialog = false
          },
          btnPay () {
              alert('1000만원이 출금되었습니다! 다시는 보지맙시다!')
              this.dialog = false
          }
      }
  }
  </script>
 
  <style>
  </style>