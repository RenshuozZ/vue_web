<template>
  <div class="main">
    <div class="wrapper">
      <!-- Sidebar  -->
      <nav id="sidebar" v-bind:class="{ active: isActive }">
        <div class=" sidebar-header ">
          <h3>Bootstrap Sidebar</h3>
          <strong>BS</strong>
        </div>
        <ul class="list-unstyled components ">
          <li class="active ">
            <a href="#homeSubmenu " data-toggle="collapse " aria-expanded="false " class="dropdown-toggle ">
              <i class="fas fa-home "></i>
              Home
            </a>
            <ul class="collapse list-unstyled " id="homeSubmenu ">
              <li>
                <a href="# ">Home 1</a>
              </li>
              <li>
                <a href="# ">Home 2</a>
              </li>
              <li>
                <a href="# ">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="# ">
              <i class="fas fa-briefcase "></i>
              About
            </a>
            <a href="#pageSubmenu " data-toggle="collapse " aria-expanded="false " class="dropdown-toggle ">
              <i class="fas fa-copy "></i>
              Pages
            </a>
            <ul class="collapse list-unstyled " id="pageSubmenu ">
              <li>
                <a href="# ">Page 1</a>
              </li>
              <li>
                <a href="# ">Page 2</a>
              </li>
              <li>
                <a href="# ">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="# ">
              <i class="fas fa-image "></i>
              Portfolio
            </a>
          </li>
          <li>
            <a href="# ">
              <i class="fas fa-question "></i>
              FAQ
            </a>
          </li>
          <li>
            <a href="# ">
              <i class="fas fa-paper-plane "></i>
              Contact
            </a>
          </li>
        </ul>

        <ul class="list-unstyled CTAs ">
          <li>
            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip " class="download ">Download source</a>
          </li>
          <li>
            <a href="https://bootstrapious.com/p/bootstrap-sidebar " class="article ">Back to article</a>
          </li>
        </ul>
      </nav>

      <!-- Page Content  -->
      <div id="content ">

        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <div class="container-fluid ">

            <button type="button " class="btn btn-info " v-on:click="isActive=!isActive ">
              <i class="fas fa-align-left "></i>
              <span>Toggle Sidebar</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto " type="button " data-toggle="collapse " data-target="#navbarSupportedContent " aria-controls="navbarSupportedContent " aria-expanded="false " aria-label="Toggle navigation ">
              <i class="fas fa-align-justify "></i>
            </button>

            <div class="collapse navbar-collapse " id="navbarSupportedContent ">
              <ul class="nav navbar-nav ml-auto ">
                <li class="nav-item active ">
                  <a class="nav-link " href="# ">Page</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link " href="# ">Page</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link " href="# ">Page</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link " href="# ">Page</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h2>Collapsible Sidebar Using Bootstrap 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="line "></div>

        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="line "></div>

        <h2>Lorem Ipsum Dolor</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <div class="line "></div>

        <h3>Lorem Ipsum Dolor</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {},
  data: function () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>
/*
    DEMO STYLE
*/
p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

i,
span {
  display: inline-block;
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

.wrapper {
  display: flex;
  align-items: stretch;
}

#sidebar {
  min-width: 250px;
  max-width: 250px;
  background: #7386d5;
  color: #fff;
  transition: all 0.3s;
}

#sidebar.active {
  min-width: 80px;
  max-width: 80px;
  text-align: center;
}

#sidebar.active .sidebar-header h3,
#sidebar.active .CTAs {
  display: none;
}

#sidebar.active .sidebar-header strong {
  display: block;
}

#sidebar ul li a {
  text-align: left;
}

#sidebar.active ul li a {
  padding: 20px 10px;
  text-align: center;
  font-size: 0.85em;
}

#sidebar.active ul li a i {
  margin-right: 0;
  display: block;
  font-size: 1.8em;
  margin-bottom: 5px;
}

#sidebar.active ul ul a {
  padding: 10px !important;
}

#sidebar.active .dropdown-toggle::after {
  top: auto;
  bottom: 10px;
  right: 50%;
  -webkit-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
}

#sidebar .sidebar-header {
  padding: 20px;
  background: #6d7fcc;
}

#sidebar .sidebar-header strong {
  display: none;
  font-size: 1.8em;
}

#sidebar ul.components {
  padding: 20px 0;
  border-bottom: 1px solid #47748b;
}

#sidebar ul li a {
  padding: 10px;
  font-size: 1.1em;
  display: block;
}

#sidebar ul li a:hover {
  color: #7386d5;
  background: #fff;
}

#sidebar ul li a i {
  margin-right: 10px;
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  background: #6d7fcc;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386d5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
  width: 100%;
  padding: 20px;
  min-height: 100vh;
  transition: all 0.3s;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    min-width: 80px;
    max-width: 80px;
    text-align: center;
    margin-left: -80px !important;
  }
  .dropdown-toggle::after {
    top: auto;
    bottom: 10px;
    right: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
  }
  #sidebar.active {
    margin-left: 0 !important;
  }
  #sidebar .sidebar-header h3,
  #sidebar .CTAs {
    display: none;
  }
  #sidebar .sidebar-header strong {
    display: block;
  }
  #sidebar ul li a {
    padding: 20px 10px;
  }
  #sidebar ul li a span {
    font-size: 0.85em;
  }
  #sidebar ul li a i {
    margin-right: 0;
    display: block;
  }
  #sidebar ul ul a {
    padding: 10px !important;
  }
  #sidebar ul li a i {
    font-size: 1.3em;
  }
  #sidebar {
    margin-left: 0;
  }
}
</style>
