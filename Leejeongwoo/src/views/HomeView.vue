<!-- <template>
  <v-container>
    <div id="home">
      <ul style="list-style-type: none;">
        <li><router-link to="/bind-test">BindTest</router-link></li>
        <li><router-link to="/click-test">클릭 테스트</router-link></li>
        <li><router-link to="/component-test">컴포넌트 테스트</router-link></li>
        <li><router-link to="/emit-test-board-game">emit 테스트(보드 게임)</router-link></li>
        <li><router-link to="/component-test">컴포넌트 테스트</router-link></li>
        <li><router-link to="/axios-test-page">Vue에서 Spring으로 데이터 전송하기</router-link></li>
        <li><router-link to="/board-list-page">게시판</router-link></li>
        <li><router-link to="/product-list-page">상품 게시판</router-link></li>
        <li><router-link to="/file-upload">파일 업로드</router-link></li>
        <li><router-link to="/image-gallery">이미지 갤러리</router-link></li>
        <li><router-link to="/carousel-page">크로셀 테스트</router-link></li>
        <li><router-link to="/dialog-test-page">다이얼로그 테스트</router-link></li>
        <li><router-link to="/table-test-page">테이블 테스트</router-link></li>
        <li><router-link to="/table-exercise-page">vue + spring 테이블 테스트</router-link></li>
      <router-view/>
    </ul>
    </div>
  </v-container>
</template> -->
<template>
    <v-container>
      <!-- <carousel-page></carousel-page> -->
      <v-row>
        <v-col cols="12" md="4">
          <router-link to="/bind-test">
          <v-card  @mouseover="handleCardMouseover">
              <v-card-title>Bind Test</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/click-test">
          <v-card>
              <v-card-title>Click Test</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/component-test">
          <v-card>
              <v-card-title>Component Test</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/emit-test-board-game">
          <v-card>
              <v-card-title>Emit Test Bord Game</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/axios-test-page">
          <v-card>
              <v-card-title>Axios Test</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/board-list-page">
          <v-card>
              <v-card-title>Board List(PRACTIC)</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/product-list-page">
          <v-card>
              <v-card-title>Product Board List</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/file-upload">
          <v-card>
              <v-card-title>File Upload</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/image-gallery">
          <v-card>
              <v-card-title>Image Gallery</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/carousel-page">
          <v-card>
              <v-card-title>Carousel Test</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/dialog-test-page">
          <v-card>
              <v-card-title>Dialog Test</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/table-test-page">
          <v-card>
              <v-card-title>Board Table Test</v-card-title>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
        <v-col cols="12" md="4">
          <router-link to="/table-exercise-page">
          <v-card>
            <v-card-title>Board Table(Vuetify + Spring)</v-card-title>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac faucibus ipsum. Nullam in massa in mauris
                bibendum euismod.
              </v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import CarouselPage from '@/views/lecture/carouselTest/CarouselPage.vue'
export default {
  name: 'HomeView',
  components: { CarouselPage },
  methods: {
    handleCardMouseover() {
    }
  }
}
</script>

<style scoped>
#home {
  justify-content: center;
  display: flex;
}

a {
  text-decoration: none;
  color: rgb(17, 28, 61);
}
</style>