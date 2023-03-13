<template>
  <v-container>
    <div>
        <p class="blue lighten-4 red--text">Test</p>
        <p class="blue white--text">Test</p>
        <p class="blue darken-3">Test</p>
        <p class="blue lighten-1 text-center">
            Vuetify~ <br>
            조만간 SOLID 로 갈아탈 예정
        </p>

        <v-btn class="teal lighten-3" rounded @click="btnClick">버튼</v-btn>
        <v-btn class="purple lighten-2">
            <v-icon>mdi-battery-alert-variant-outline</v-icon>
            <span>배터리 교체</span>
        </v-btn>
    </div>

    <v-layout justify-center>
        <v-dialog v-model="dialog" persistent max-width="400">
            <template v-slot:activator="{on}">
                <v-btn color="primary" dark v-on="on">결제</v-btn>
            </template>    
            <!-- v-on 이 자동으로 v-card 랑 연결되는 거임 -->
            <v-card>
                <v-card-title class="headline">
                    {{ name }}
                </v-card-title>
                <v-text >
                    오늘만 할인 50%!!
                </v-text>
                <v-text>
                    지금 바로 결제 하시겠습니까?
                </v-text>
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
    data() {
        return {  //dialog 버튼을 누르면 자동으로 true가 됨. false로 지정해주어 활성화 차단 시킴
            name: '풀패키지 여행코스!!',
            dialog: false,
        }
    },
    methods: {
        btnClick () {
            alert('버튼 누름')
        },
        btnCancel () {
            alert('취소')
            this.dialog = false
        },
        btnPay () {
            alert('출금 완료~')
            this.dialog = false
        }
    }
}
</script>

<style>

</style>