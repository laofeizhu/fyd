<template>
  <el-container style="height:100%">
    <el-main>
      <el-container direction="horizontal">
        <el-aside width="100px">
          <el-menu>
            <el-menu-item index="1">
              <router-link to="/home">Home</router-link>
            </el-menu-item>
            <el-menu-item index="2">
              <router-link to="/univs">University</router-link>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view class="view"></router-view>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<style>
.el-table td, .el-table th {
  padding: 5px 0;
}
</style>


<script>
export default {
  data: () => {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "home",
          title: "Home",
          href: "/#/home",
          router: true
        },
        {
          icon: "account_circle",
          title: "Universities",
          href: "/#/univs",
          router: true
        },
        {
          icon: "account_circle",
          title: "Housing",
          href: "/#/house"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "MEVN Stack Client",
      alertOpen: false,
      alertString: "",
      alertSuccess: false,
      isDarkMode: false
    };
  },

  watch: {
    isDarkMode() {
      if (!this.isDarkMode) {
        //NOT dark mode
        this.$vuetify.theme = {
          primary: "#0D47A1", //Main color
          primaryText: "#FFFFFF", //Color for text on primary
          secondary: "#90CAF9", //Color for active nav
          lightText: "#000000"
        };
      } else {
        //Dark mode
        this.$vuetify.theme = {
          primary: "#424242", //Main color
          primaryText: "#FFFFFF", //Color for text on primary
          secondary: "#90CAF9", //Color for active nav
          lightText: "#FFFFFF"
        };
      }
    }
  },

  methods: {
    alert(success, callName, resource) {
      this.alertOpen = false;
      this.alertString = callName + " " + resource;
      if (success) {
        this.alertSuccess = true;
        this.alertString += " was successful.";
      } else {
        this.alertSuccess = false;
        this.alertString += " has failed.";
      }
      this.alertOpen = true;
    },

    getNavClass(href) {
      if (this.$route.fullPath == href.substring(2)) {
        return "secondary primaryText--text";
      } else {
        return "primary primaryText--text";
      }
    }
  }
};
</script>
