<template>
  <v-container>
    <v-toolbar dense dark>
        <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/>
        <v-toolbar-title>
            <span class="font-weight-light">YOONJI</span>
            <span>안녕</span>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn>
                망고요구르트
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer app v-model="navigation_drawer" temporary>
       <v-list> 
        <v-list-item>
            <v-list-item-action>
                <v-icon>
                    아직 없
                </v-icon>
            </v-list-item-action>
            <v-list-item-content>
                <v-list-item-title>
                    test
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
            links: [
                { icon: '', text: '', name: '', route: ''},
                { icon: '', text: '', name: '', route: ''},
            ]
        }
    }
}
</script>

<style>

</style>