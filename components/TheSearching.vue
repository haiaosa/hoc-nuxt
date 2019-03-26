<template>
  <nav class="tile level container">
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <input class="input is-danger" type="text" placeholder="Từ khóa..." />
        </p>
        <p class="control">
          <button class="button is-danger is-outlined">
            Tìm kiếm truyện
          </button>
        </p>
      </div>
    </div>

    <!-- Right side -->
    <div class="level-right">
      <article class="level-item media">
        <figure class="media-left">
          <p class="image is-32x32">
            <img :src="imageSrc" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <a class="button is-warning is-outlined">Phong Nguyễn</a>
          </div>
        </div>
      </article>
      <div class="level-item">
        <nav
          class="navbar has-background-grey-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless has-text-warning">
                  <span class="icon">
                    <i class="fas fa-angle-double-down"></i>
                  </span>
                </a>

                <div class="navbar-dropdown is-right has-background-warning">
                  <router-link :to="{ name: 'index' }" class="navbar-item">
                    Thông tin cá nhân
                  </router-link>
                  <router-link :to="{ name: 'index' }" class="navbar-item">
                    Đổi mật khẩu
                  </router-link>
                  <router-link :to="{ name: 'index' }" class="navbar-item">
                    Sửa thông tin
                  </router-link>
                  <router-link :to="{ name: 'index' }" class="navbar-item">
                    Truyện đã theo dõi
                  </router-link>
                  <hr class="navbar-divider" />
                  <a class="navbar-item">
                    Thoát
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      imageSrc: require('~/static/avatar.png')
    }
  }
}
</script>

<style scoped></style>
