<template>
  <v-container>
    <v-toolbar dense dark>
        <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
        <v-toolbar-title>
            <span class="font-weight-light">YOONJI</span>
            <span>안녕</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn text v-for="link in links" :key="link.icon" :to="link.route">
                {{ link.text }}
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer app v-model="navigation_drawer">
       <v-list nav dense> 
        <v-list-item v-for="link in links" :key="link.name" router :to="link.route">
            <v-list-item-action>
                <v-icon>
                    {{ link.icon }}
                </v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                    {{ link.text }}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list> 
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
    name: "navigationView",
    data () {
        return {
            navigation_drawer: false,
            links: [  //mdi 아이콘명을 icon 속성으로 작성하면됨(mdi붙여서)
                { icon: 'mdi-home', text: 'Home', name: 'home', route: '/'},
                { icon: 'mdi-share-variant-outline', text: 'Sharing', name: 'JpaBoardListPage', route: '/board-list-page'},
            ]
        }
    }
}
</script>

<style>

</style>