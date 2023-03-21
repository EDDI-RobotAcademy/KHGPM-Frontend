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
          <v-card width="460">
            <v-card-text class="text-center px-12 py-16">

              <v-form @submit.prevent="onSubmit">
                <div class="text-h4 font-weight-black mb-10">로그인</div>

                <div class="d-flex">
                  <v-text-field
                      v-model="email"
                      label="이메일"
                      :rules="email_rule"
                      clearable
                      prepend-icon="mdi-account-outline"
                      color="orange"
                  />
                </div>

                <div class="d-flex">
                  <v-text-field
                      type="password"
                      v-model="password"
                      label="비밀번호"
                      :rules="password_rule"
                      clearable
                      prepend-icon="mdi-lock-outline"
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
                    :disabled="false"
                >로그인</v-btn><br/>

                <div class="mt-5">
                  <v-row>
                    <v-col>
                      <router-link
                          class="text-decoration-none purple--text mr-5"
                          to="/sign-up"
                      >회원가입</router-link>
                    </v-col>
                    <v-col>
                      <router-link
                          class="text-decoration-none purple--text ml-5 mr-5"
                          to="/search-password"
                      >PW 찾기</router-link>
                    </v-col>
                  </v-row>
                </div>
              </v-form>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: "",
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
    };
  },
  methods: {
    onSubmit() {
      const { email, password } = this;
      this.$emit("submit", { email, password });
    },
  },
};

</script>

<style scoped>

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400&display=swap");

</style>