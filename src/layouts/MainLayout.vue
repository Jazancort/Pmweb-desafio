<template>
<q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title class="text-center">
          <a href="https://www.linkedin.com/in/jazancort/" >
            <img class="q-pt-xs q-pr-xl" style="height: 50px" src="Jazancort-logos_white-recortado.png">
          </a>
        </q-toolbar-title>

        <!-- <q-btn type="a" href="https://github.com/Jazancort" target="https://github.com/Jazancort" flat round dense icon="fab fa-github" />
        <q-btn class="q-pl-md" type="a" href="https://www.linkedin.com/in/jazancort/" target="https://www.linkedin.com/in/jazancort/" flat round dense icon="fab fa-linkedin" /> -->
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="drawer"
      content-class="bg-custom-blue-dark"
      :breakpoint="400"
      overlay
      elevated
      behavior="mobile"
    >
    <q-scroll-area class="bg-black" style="height: calc(100% - 150px); margin-top: 150px;">
      <q-list class="text-white" >
        <q-item-label class="text-center text-white" header>Menu</q-item-label>
        <div v-for="item in menuList" :key="item">
          <q-item clickable :to="item.router" exact active-class="text-purple-4">
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-bold shadow-24">{{item.label}}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-scroll-area>
      <q-img class="absolute-top" src="/fundo-menu.jpeg" style="height: 150px">
          <div class="absolute-bottom text-center bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="/julio_perfil.jpg">
            </q-avatar>
            <div class="text-weight-bold shadow-24">Julio Azancort</div>
            <div class="q-gutter-sm">
              <q-btn dense color="black" round size="sm" icon="fab fa-github"
              type="a" href="https://github.com/Jazancort" target="_blank" />
              <q-btn dense color="black" round size="sm" icon="fab fa-linkedin-in"
              type="a" href="https://www.linkedin.com/in/jazancort/" target="_blank" />
            </div>
          </div>
        </q-img>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'
const menuList = [
  {
    icon: 'fas fa-user',
    label: 'Formulário',
    router: '/'
  },
  {
    icon: 'fas fa-user-tie',
    label: 'Justificativa',
    router: 'justificativa'
  }
]
export default {
  name: 'MainLayout',
  components: {
    // EssentialLink
  },
  data () {
    return {
      drawer: false,
      menuList
    }
  }
}
</script>

<style>
.bg-custom-blue-dark {
  background: #11161d;
}
</style>
