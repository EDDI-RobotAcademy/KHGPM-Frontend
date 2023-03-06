<template>
    <v-container>
        <div>
            <h1>Hello {{ message }}</h1>
            <p>{{ msg }}</p>
            <p>{{ list[number] }}</p>
            <p>{{ animals[0] }}</p>
        </div>
    </v-container>
</template>

<script>
export default {
  //name은 없어도 실행 되는데 다른곳에서 사용하려고 이름 지정해둔것같음
  name: 'BindTest',
  data () {
    return {
        message: "tEsT",
        msg: "이렇게 html과 javascript를 변수화하여 연결 할 수 있습니다!!!!!!",
        list: ['apple', 'banana', 'grape', 'watermelon'],
        number: 1,
        practivetable: [ 
        [1,  2,  3,  4,   5],
        [6,  7,  8,  9,  10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25],
      ],
      animals:["mondey", "rar", "dog", "lion"]
    }
  }
}
</script>
