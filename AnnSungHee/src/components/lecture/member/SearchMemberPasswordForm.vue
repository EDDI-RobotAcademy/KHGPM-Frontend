<template>
    <div class="grey lighten-5" style="font-family: 'Noto Sans KR', sans-serif">
      <v-container class="white" style="width: 1240px">
        <v-row justify="center">
          <v-col cols="auto" style="padding-bottom: 90px">
            <router-link to="/">
              <v-img
                  :src="require('@/assets/logo.png')"
                  width="120"
                  class="mx-auto mb-6"
              ></v-img>
            </router-link>
            <v-card width="460" v-if="!isPass">
              <v-card-text class="text-center px-12 py-16">
  
                <v-form>
                  <div class="text-h4 font-weight-black mb-10">PW 찾기</div>
  
                  <div class="d-flex">
                    <v-text-field
                        v-model="email"
                        label="이메일"
                        :rules="email_rule"
                        clearable
                        prepend-icon="mdi-email"
                        color="orange"
                    />
                  </div>
  
                  <v-btn
                      block
                      x-large
                      rounded
                      color="orange lighten-1"
                      class="mt-6"
                      @click="findAccountEmail"
                      :disabled="false"
                  >찾기</v-btn>
                </v-form>
  
              </v-card-text>
            </v-card>
  
            <v-card width="460" v-if="isPass">
              <v-card-text class="text-center px-12 py-16">
  
                <v-form>
                  <div class="text-h4 font-weight-black mb-10">비밀번호 재설정</div>
  
                  <div class="d-flex">
                    <v-text-field
                        type="password"
                        v-model="password"
                        label="비밀번호"
                        :rules="password_rule"
                        clearable
                        prepend-icon="mdi-lock-outline"
                        :counter="15"
                        color="orange"
                    />
                  </div>
  
                  <div>
                    <v-text-field
                        type="password"
                        v-model="passwordConfirm"
                        label="비밀번호 확인"
                        :rules="password_confirm_rule"
                        clearable
                        prepend-icon="mdi-lock-check-outline"
                        :counter="15"
                        color="orange"
                    />
                  </div>
  
                  <v-btn
                      type="submit"
                      block
                      x-large
                      rounded
                      color="orange lighten-1"
                      class="mt-6"
                      @click="resetPw"
                      :disabled="false"
                  >비밀번호 변경</v-btn>
                </v-form>
  
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </template>
  
  <script>
  
  import axios from "axios";
  
  export default {
    name: "SearchMemberPasswordForm",
    data() {
      return {
        email: "",
        phoneNumber: "",
        isPass: false,
        password: "",
        passwordConfirm: "",
        email_rule:[
          v => !!v || '이메일을 입력해주세요.',
          v => {
            const replaceV = v.replace(/(\s*)/g, '')
            const pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/
            return pattern.test(replaceV) || '이메일 형식으로 입력해주세요'
          }
        ],
        password_rule: [
          v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
          v => !(v && v.length >= 30) || '패스워드는 30자 이상 입력할 수 없습니다.',
        ],
        password_confirm_rule: [
          v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
          v => !(v && v.length >= 30) || '패스워드는 30자 이상 입력할 수 없습니다.',
          v => v === this.password || '패스워드가 일치하지 않습니다.'
        ],
      };
    },
    methods: {
      findAccountEmail() {
        const { email } = this;
        axios
            .post("http://localhost:7777/member/emailMatch", { email })
            .then((res) => {
              if (res.data) {
                alert("인증이 완료되었습니다.");
                this.isPass = true;
              } else {
                alert("입력하신 정보로 가입된 정보가 없습니다.");
                this.isPass = false;
              }
            });
      },
      resetPw() {
        const { email, password } = this;
        axios
            .post("http://localhost:7777/member/applyNewPassword/", {
              email, password,
            })
            .then(() => {
              alert("비밀번호가 변경되었습니다.");
            });
      },
    },
  }
  
  </script>
  
  <style scoped>
  
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap");
  
  </style>