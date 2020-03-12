<template>
  <div class="style">
    <div class="navbar">
      <span class="open-slide">
        <a href="#" @click="onOff = true">
          <svg width="30" height="30">
            <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
            <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
            <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
          </svg>
        </a>
      </span>
      <ul class="navbar-nav">
        <a
          ><li v-for="task in tasks" :key="task">{{ task.text }}</li></a
        >
      </ul>
    </div>
    <div id="side-menu" class="side-nav" v-show="onOff" style="250">
      <a href="#" class="btn-close" @click="onOff = false">&times;</a>
      <router-link to="project"> <a></a>Home </router-link>
      <router-link to="/"> <a></a>About </router-link>
      <router-link to="/"> <a></a>Services </router-link>
      <router-link to="/"> <a></a>Contact </router-link>
    </div>

    <h1 id="main">Responsive Side Menu</h1>

  </div>
</template>

<script>
export default {
  name: "resune",
  data() {
    return {
      user: {
        name: "resune"
      },
      onOff: true,
      tasks: [
        { text: "Home" },
        { text: "About" },
        { text: "Services" },
        { text: "Contact" }
      ]
    };
  }
};
</script>

<style lang="scss">
.style {
  max-width: 700px;
  margin-top: 20px;
  padding: 10px;
  line-height: 1.5;
  color: #333 !important;
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  font-family: Lato, sans-serif !important;
  .navbar {
    background-color: #00263c;
    overflow: hidden;
    height: 63px;
    a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 17px 16px;
      text-decoration: none;
      font-size: 17px;
    }
    a {
      display: flex;
      li {
        margin: 10px;
      }
    }
    li:hover {
      border-bottom: 5px solid #fff;
      color: #f8991d;
    }
    ul {
      list-style: none;
    }
  }
  #side-menu {
    transition: margin-left 0.5s;
    padding: 20px;
    overflow: hidden;
    width: 150px;
  }
  .side-nav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 287px;
    // left: 0;
    background-color: #111;
    opacity: 0.9;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    a {
      padding: 10px 10px 10px;
      text-decoration: none;
      font-size: 22px;
      color: #ccc;
      display: block;
      transition: 0.3s;
    }
    a:hover {
      color: #fff;
    }
    .btn-close {
      position: relative;
      left: 60px;
      font-size: 36px;
      margin-left: 50px;
    }
  }
  @media (max-width: 568px) {
    .navbar-nav {
      display: none;
    }
  }
}
</style>
