<template>
  <nav
    class="navbar is-fixed-bottom is-warning"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Trang chủ
        </nuxt-link>
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Trang Mô tả
        </nuxt-link>
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Trang đọc truyện
        </nuxt-link>
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Trang sắp xếp
        </nuxt-link>
        <nuxt-link :to="{ name: 'note' }" class="navbar-item">Note</nuxt-link>

        <div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
          <a class="navbar-link">
            Thể loại
          </a>

          <div class="navbar-dropdown">
            <div
              class="navbar-item tile is-ancestor notification has-background-warning"
            >
              <div class="tile is-parent">
                <article class="tile is-child">
                  <div class="content">
                    <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    </nuxt-link>
                  </div>
                </article>
                <article class="tile is-child">
                  <div class="content">
                    <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    </nuxt-link>
                  </div>
                </article>
                <article class="tile is-child">
                  <div class="content">
                    <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    </nuxt-link>
                  </div>
                </article>
                <article class="tile is-child">
                  <div class="content">
                    <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    </nuxt-link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
          <a class="navbar-link">
            Xếp hạng
          </a>

          <div class="navbar-dropdown">
            <div
              class="navbar-item tile is-ancestor notification has-background-warning"
            >
              <div class="tile is-parent">
                <article class="tile is-child">
                  <div class="content">
                    <nuxt-link :to="{ name: 'index' }" class="navbar-item">
                    </nuxt-link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>

        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Lịch sử
        </nuxt-link>
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Theo dõi
        </nuxt-link>
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Thảo luận
        </nuxt-link>
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          Tuyển nhân sự
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-dark is-outlined">
              <strong>Sign up</strong>
            </a>
            <a class="button is-dark is-outlined">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped></style>
