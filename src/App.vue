<template>
  <v-app>
    <v-navigation-drawer 
      app 
      temporary
      v-model="drawer"
    >
      <v-list>
          <v-list-tile 
            v-for="link of links"  
            :key="link.title"        
            :to="link.url"
          >
            <v-list-tile-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-text="link.title"></v-list-tile-title>
            </v-list-tile-content>           
          </v-list-tile>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon
        @click="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Peers</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn          
          v-for="link of links"  
          :key="link.title"
          flat
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {title: 'Login', icon: 'lock', url: '/login' },
        {title: 'Registration', icon: 'face', url: '/registration' },
        {title: 'UserProfile', icon: 'face', url: '/userProfile' },
        {title: 'RoomProfile', icon: 'face', url: '/roomProfile' }
      ]
    }
  }
}
</script>
