<template>
    <v-container>
      <v-toolbar dense dark>
        <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
        <v-toolbar-title>
          <span class="font-weight-light">EDDI</span>
          <span>꾸르티프!</span>
        </v-toolbar-title>
        <v-toolbar-items>
          <v-btn>
            테스트
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
  
      <v-navigation-drawer app v-model="navigation_drawer" temporary>
        <v-list nav dense>
          <v-list-item>
            <v-list-item-action>
              <v-icon>
                아직읍따
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                테스트
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </template>
  
  <script>
  export default {
      name: "NavigationView",
      data () {
          return {
              navigation_drawer: false,
              links: [
                  { icon: '', text: '', name: '', route: '' },
                  { icon: '', text: '', name: '', route: '' },
              ]
          }
      }
  }
  </script>
  
  <style>
  </style>