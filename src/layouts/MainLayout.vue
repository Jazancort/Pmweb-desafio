<template>
<q-layout class="shadow-2 rounded-borders" view="lHh Lpr lFf">
  <!-- Header da aplicação -->
    <q-header bordered  class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />

        <!-- Imagem do título -->
        <q-toolbar-title class="text-center q-pl-xl q-ml-xl">
          <a href="https://www.linkedin.com/in/jazancort/" target="_blank" >
            <img class="q-pt-xs q-pr-xl" style="height: 50px" src="Jazancort-logos_white-recortado.png">
          </a>
        </q-toolbar-title>

        <!-- Dropdown do header -->
        <q-btn-dropdown flat label="Páginas">
          <q-list class="text-black" >
            <div v-for="item in menuList" :key="item">
              <q-item clickable :to="item.router" exact active-class="text-primary">
                <q-item-section avatar>
                  <q-icon :name="item.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">{{item.label}}</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div>
              <q-item clickable @click="customBtn" exact active-class="text-purple-4">
                <q-item-section avatar>
                  <q-icon name="fas fa-trash-alt" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-weight-bold">Limpar localStorage</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </q-btn-dropdown>

      </q-toolbar>
    </q-header>

    <!-- Menu lateral -->
    <q-drawer
      v-model="drawer"
      :breakpoint="400"
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
          <div>
            <q-item clickable @click="customBtn" exact active-class="text-purple-4">
              <q-item-section avatar>
                <q-icon name="fas fa-trash-alt" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold shadow-24">Limpar localStorage</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </q-list>
      </q-scroll-area>

      <!-- Imagens do menu -->
      <q-img class="absolute-top" src="/fundo-menu.jpeg" style="height: 150px">
        <div class="absolute-bottom text-center bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="/julio_perfil.jpg">
          </q-avatar>
          <div class="text-weight-bold shadow-24">Julio Azancort</div>
          <div class="q-gutter-sm">
            <q-btn dense color="black" round size="sm" icon="fab fa-github"
            type="a" href="https://github.com/Jazancort/Pmweb-desafio" target="_blank" />
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

<script src="src/statics/js/mainLayout.js"></script>
