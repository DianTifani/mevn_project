<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-dark justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/">
          <a class="navbar-brand float-left">D-Commerce</a>
        </router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/post">PRODUCTS</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category">CATEGORYS</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
  .nav-link{
    font-size: 0.9rem;
  }
  .navbar{
          background: #7fad39;
  }
</style>