<template>
  <div class="tile is-child">
    <div class="level">
      <div class="level-item">
        <template>
          <b-autocomplete
            rounded
            v-model="name"
            :data="filteredDataArray"
            placeholder="e.g. jQuery"
            icon="magnify"
            @select="option => (selected = option)"
          >
            <template slot="empty"
              >No results found</template
            >
          </b-autocomplete>
        </template>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <template>
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </p>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small>
                  <small>31m</small>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </div>
            <div class="media-right">
              <button class="delete"></button>
            </div>
          </article>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      data: [
        'Angular',
        'Angular 2',
        'Aurelia',
        'Backbone',
        'Ember',
        'jQuery',
        'Meteor',
        'Node.js',
        'Polymer',
        'React',
        'RxJS',
        'Vue.js'
      ],
      name: '',
      selected: null,
      imageSrc: require('~/static/avatar.png')
    }
  },
  computed: {
    filteredDataArray() {
      return this.data.filter(option => {
        return (
          option
            .toString()
            .toLowerCase()
            .indexOf(this.name.toLowerCase()) >= 0
        )
      })
    }
  }
}
</script>

<style scoped></style>
