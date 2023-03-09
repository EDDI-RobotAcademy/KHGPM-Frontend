<template>
  <v-container>
    <div>
      <p class="blue lighten-4 red--text">놀라운 음료수</p>
      <p class="blue white--text">세상에 이런 음료가?</p>
      <p class="yellow darken-3">[속보] 밀키스 마셔... </p>
      <p class="teal lighten-1 text-center">
        충격! 밀키스는 맛있다
      </p>

      <v-btn class="teal lighten-3" rounded @click="btnClick">버튼</v-btn>
      <v-btn class="purple lighten-2">
        <v-icon>mdi-battery-alert-variant-outline</v-icon>
        <span>배터리 교체!</span>
      </v-btn>
    </div>

    <v-layout justify-center>
      <v-dialog v-model="dialog" persistent max-width="400">
        <template v-slot:activator="{on}">
          <v-btn color="primary" dark v-on="on">눌러보세요</v-btn>
        </template>

        <v-card>
          <v-card-title class="headline">
            {{ name }}
          </v-card-title>
          <v-card-text>
            ★밀키스 최저가 보장★
          </v-card-text>
          <v-card-text>
            품절 임박! 지금 바로 주문하세요!
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
            name: '밀키스팔이',
            dialog: false,
        }
    },
    methods: {
        btnClick () {
            alert('클릭클릭')
        },
        btnCancel () {
            alert('밀키스 왜 안 사?')
            this.dialog = false
        },
        btnPay () {
            alert('밀키스 10개 100만원 결제 완료!')
            this.dialog = false
        }
    }
}

</script>

<style>

</style>