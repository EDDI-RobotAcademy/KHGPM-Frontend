<template>
  <div>
    <label>메시지:</label>
    <input v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>
<!-- Vue.js에서 양방향 데이터 바인딩(two-way data binding)은 데이터의 변경을 자동으로 업데이트할 수 있는 기능입니다.

Vue.js에서 양방향 데이터 바인딩을 구현하기 위해서는 v-model 디렉티브를 사용합니다. v-model 디렉티브는 input, select, textarea와 같은 HTML 요소에서 사용할 수 있으며, 이 요소의 값을 Vue.js 인스턴스의 데이터와 바인딩하여 두 값이 항상 동기화되도록 합니다.

위 컴포넌트에서 v-model="message"은 input 요소의 값과 Vue.js 인스턴스의 message 데이터를 양방향으로 바인딩합니다. 
사용자가 input 요소의 값을 변경하면 message 데이터가 업데이트되고, message 데이터가 변경되면 input 요소의 값도 업데이트됩니다.

<p>{{ message }}</p> 요소는 message 데이터를 출력하며, 이는 양방향 데이터 바인딩이 잘 동작하는지 확인하기 위한 용도입니다.

이렇게 양방향 데이터 바인딩을 사용하면 데이터의 변경을 간편하게 처리할 수 있어서, Vue.js에서는 매우 유용하게 사용되고 있습니다. -->

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
};
</script>
