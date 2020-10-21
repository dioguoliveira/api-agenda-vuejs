<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <router-link to="/" class="brand-link">
      <img
        src="./../../assets/img/logo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      />
      <span class="brand-text font-weight-light">Agenda</span>
    </router-link>

    <!-- Sidebar -->
    <div class="sidebar">

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
          with font-awesome or any other icon font library-->
          <li class="nav-item has-treeview">
            <router-link to="/contatos" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>Contatos</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "SidebarMenu",
  data: function() {
    return {
      isMenuOpen: false
    };
  },
  computed: {
    authUser() {
      return this.$store.getters.getAuthUser;
    }
  },
  methods: {
    toogleMenu: function(event) {
      event.stopPropagation();
      event.preventDefault();
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};
</script>

<style>
</style>