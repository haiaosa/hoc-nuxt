<template>
  <v-layout row wrap>
    <v-flex d-flex xs8>
      <v-card
        color="yellow darken-1"
        flat
        nuxt
        :to="{ name: 'index' }"
      >
        <v-img :src="require('~/assets/1.jpg')">
          <v-layout
            align-end
            justify-start
            row
            wrap
            fill-height
          >
            <v-flex xs12>
              <v-card-title>
                Cá chết hàng loạt nổi trắng hồ Văn Chương
              </v-card-title>
              <v-card-text>
                {{ items }}
              </v-card-text>
            </v-flex>
          </v-layout>
        </v-img>
      </v-card>
    </v-flex>
    <v-flex d-flex xs4>
      <v-layout column wrap>
        <v-flex>
          <v-card
            color="yellow darken-4"
            flat
            nuxt
            :to="{ name: 'index' }"
          >
            <v-img :src="require('~/assets/2.jpg')">
              <v-layout
                align-end
                justify-start
                row
                wrap
                fill-height
              >
                <v-flex xs12>
                  <v-card-title>
                    Ba năm Hà Nội trả hơn 7 tỷ thuê phần
                    mềm của Nhật Cường
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-img>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card
            color="yellow darken-4"
            flat
            nuxt
            :to="{ name: 'index' }"
          >
            <v-img :src="require('~/assets/3.jpg')">
              <v-layout
                align-end
                justify-start
                row
                wrap
                fill-height
              >
                <v-flex xs12>
                  <v-card-title>
                    Về "chung một nhà", 8 sở ngành Hà Nội
                    hoạt động thế nào?
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  props: ['items']
}
</script>
