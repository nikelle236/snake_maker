<template>
<div id="app">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/snakes/logo.png">
      </router-link>
    </div>
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/MySnake">My Snake</router-link>
  </div>
  <hr>
  <router-view />
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px;
  background: #eaffe9;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
  background: white;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 250px;
  background: white;
}


.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}
</style>