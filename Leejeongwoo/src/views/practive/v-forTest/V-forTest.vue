<template>
  <v-container>
    <!-- <태그v-for="작명 in 몇회" :key="작명"-->
    <!-- in 몇회라는게 자료안에 데이터 갯수만큼 반복도 되기 때문에  대부분 데이터 이름 을 써놓기 한다. -->
    <h1 style="text-align: center;">v-for 연습</h1>
    <div>
      <h2 v-for="a in animals" :key="a">{{ a }}</h2>
      <hr>
      <h2 v-for="(a, index) in animals" :key="index">{{ a }} >> {{ index }}</h2>
      <hr>
      <ul>
        <li v-for="(p, index) in practivetable" :key="index">{{ p }}</li>
      </ul>
      <hr>
      <ul>
        <li v-for="(u, index) in users" :key="index">
          이름은 {{ u.name }} 직업은 {{ u.job }} 성별은 {{ u.gender }}입니다.
          <p v-for="sk in u.skill" :key="sk">{{ sk }}</p>
        </li>
      </ul>
    </div>
    <button>버튼</button>
    <input type="text">
    <img class="popupImageItem" :src="uploadImageFile">
  </v-container>
</template>

<script>
export default {
  name: 'VforPractive',
  data() {
    return {
      animals: ["monkey", "rat", "dog", "lion"],
      users: [
        { name: 'jaden', job: 'developer', gender: 'male', skill: ["html", "css", "javascript"] },
        { name: 'john', job: 'designer', gender: 'female', skill: ["html", "css", "javascript"] },
        { name: 'sean', job: 'ceo', gender: 'male', skill: ["html", "css", "javascript"] }
      ],
      practivetable: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ]
    }
  },
  methods: {
    onFileSelected(event) {
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.uploadImageFile = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
      }
    },
  }


}
</script>

<style></style>
