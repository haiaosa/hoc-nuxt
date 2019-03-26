<template>
  <div class="tile is-child">
    <div class="level">
      <div class="level-item">
        <b-field :class="`has-addons`" label="Name">
          <b-input v-model="name"></b-input>
        </b-field>
        <!-- <div class="field has-addons">
          <p class="control">
            <input
              class="input is-danger"
              type="text"
              placeholder="Từ khóa..."
            />
          </p>
          <p class="control">
            <button class="button is-danger is-outlined">
              Tìm kiếm truyện
            </button>
          </p>
        </div> -->
      </div>

      <!-- Right side -->
      <div class="level-right"></div>
    </div>
  </div>
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
