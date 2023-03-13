<template>
    <v-container>
      <div>
        <button v-on:click="addManyMonsters">몬스터 군단 추가</button><br/><br/>
  
        <button v-on:click="darkFlame">다크 플레임</button><br/>
  
        <ul>
          <li v-for="(item, index) in list"
              v-bind:key="index">
            ID: {{ item.id }} {{ item.name }} HP: {{ item.hp }}
            <button v-on:click="attackMonster(index)">공격</button>
          </li>
        </ul>
  
        <ul>
          <li v-for="(item, index) in list"
              v-bind:key="index">
            ID: {{ item.id }} {{ item.name }} HP: {{ item.hp }}
            <button v-on:click="attackMonster(index)">공격</button>
          </li>
        </ul>
      </div>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "LifeCyclePage",
    data () {
      return {
        monsterBook: [
          { monsterId: 1, name: '슬라임', hp: 50, exp: 10, dropMoney: 5 },
          { monsterId: 2, name: '고블린', hp: 80, exp: 15, dropMoney: 10 },
          { monsterId: 3, name: '사슴', hp: 100, exp: 25, dropMoney: 10 },
          { monsterId: 4, name: '리본돼지', hp: 100, exp: 15, dropMoney: 25 },
          { monsterId: 5, name: '오크', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 6, name: '멧돼지', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 7, name: '스켈레톤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 8, name: '고블린매지션', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 9, name: '소', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 10, name: '뱀', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 11, name: '곰', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 12, name: '토끼', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 13, name: '호랑이', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 14, name: '스켈레톤 아처', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 15, name: '리치', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 16, name: '죽음의 군주', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 17, name: '골렘', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 18, name: '와이번', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 19, name: '드레이크', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 20, name: '구울', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 21, name: '오우거', hp: 150, exp: 15, dropMoney: 25 },
  
          { monsterId: 999, name: '드래곤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 1000, name: '옐로 드래곤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 1001, name: '그린 드래곤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 1002, name: '레드 드래곤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 1003, name: '블루 드래곤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 1004, name: '블랙 드래곤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 1005, name: '골드 드래곤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 1005, name: '데스 드래곤', hp: 150, exp: 15, dropMoney: 25 },
          { monsterId: 1007, name: '스텔스 드래곤', hp: 150, exp: 15, dropMoney: 25 },
        ],
        list: [
          { id: 1, name: '슬라임', hp: 100 },
          { id: 2, name: '고블린', hp: 200 },
          { id: 3, name: '사슴', hp: 150 },
          { id: 4, name: '리본돼지', hp: 250},
          { id: 5, name: '슬라임', hp: 100 },
        ],
      }
    },
    methods: {
      addManyMonsters: function () {
        for (let i = 0; i < 100; i++) {
          let max = this.list.reduce(function(a, b) {
            return a > b.id ? a : b.id
          }, 0)
  
          let idx = Math.floor(Math.random() * this.monsterBook.length)
  
          this.list.push({
            id: max + 1,
            monsterId: idx,
            name: this.monsterBook[idx].name,
            hp: this.monsterBook[idx].hp
          })
        }
      },
      darkFlame () {
        console.log("다크 플레임")
  
        for (let i = 0; i < this.list.length; i++) {
          this.list[i].hp = BigInt(this.list[i].hp) - BigInt(1000)
        }
      },
      killMonster () {
        for (let i = 0; i < this.list.length; i++) {
          if (this.list[i].hp <= 0) {
            this.list.splice(i, 1)
          }
        }
      }
    },
    beforeCreate: function () {
      alert('Before Create')
    },
    created: function () {
      alert('Created')
    },
    beforeMount: function () {
      alert('Before Mount')
    },
    mounted: function () {
      alert('Mounted')
    },
    beforeUpdate () {
      alert('Before Update')
  
      this.killMonster();
    },
    updated: function () {
      alert('Updated')
    },
    beforeDestroy: function () {
      alert('Before Destroy')
    },
    destroyed: function () {
      alert('Destroyed')
    }
  }
  </script>
  
  <style scoped>
  
  </style>