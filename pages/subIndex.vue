<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs2>
        <v-card color="grey lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs8>
        <v-layout column wrap>
          <v-flex d-flex>
            <v-card color="blue-grey lighten-1" dark>
              <v-card-text>
                <p class="display-4 text-uppercase text-xs-center">
                  Quảng cáo here
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex d-flex xs8>
                <v-tabs
                  v-model="active"
                  color="cyan"
                  dark
                  slider-color="red lighten-2"
                  grow
                >
                  <v-tab v-for="n in 3" :key="n" ripple> Item {{ n }} </v-tab>
                  <v-tab-item v-for="n in 3" :key="n">
                    <v-layout column wrap mt-1>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex d-flex xs7>
                            <v-card color="yellow darken-1" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-flex>
                          <v-flex d-flex xs5>
                            <v-layout column wrap>
                              <v-flex>
                                <v-card color="yellow darken-4" flat>
                                  <v-card-text>{{ text }}</v-card-text>
                                </v-card>
                              </v-flex>
                              <v-flex>
                                <v-card color="yellow darken-4" flat>
                                  <v-card-text>{{ text }}</v-card-text>
                                </v-card>
                              </v-flex>
                            </v-layout>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex v-for="n in 4" :key="n" d-flex xs6>
                            <v-card color="green darken-5" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex v-for="n in 2" :key="n" d-flex xs6>
                            <v-card color="green lighten-3" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-layout row wrap>
                          <v-flex v-for="n in 2" :key="n" d-flex xs6>
                            <v-card color="blue lighten-1" flat>
                              <v-card-text>{{ text }}</v-card-text>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                      <v-flex d-flex>
                        <v-card color="yellow darken-4" flat>
                          <v-card-text>{{ text }}</v-card-text>
                        </v-card>
                      </v-flex>
                      <v-flex d-flex>
                        <v-card color="brown darken-2" flat>
                          <v-card-text>{{ text }}</v-card-text>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-tab-item>
                </v-tabs>
              </v-flex>
              <v-flex d-flex xs4>
                <v-layout column wrap>
                  <TheRight1 :datas="daubuoi" />
                  <TheRight2 />
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs2>
        <v-card color="grey lighten-2" dark>
          <v-card-text>{{ lorem.slice(0, 30) }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheRight1 from '~/components/SubIndex/TheRight1'
import TheRight2 from '~/components/SubIndex/TheRight2'

export default {
  components: {
    TheRight1,
    TheRight2
  },
  layout: 'homeWithSidebar',
  data: function() {
    return {
      active: null,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
      market: [
        {
          title:
            'Ông Bùi Quang Huy, tổng giám đốc Nhật Cường Mobile đã bỏ trốn ',
          subtitle:
            'Lần đầu tiên lãnh đạo Sở Thông tin & Truyền thông Hà Nội báo cáo'
        },
        {
          title: 'Cảnh sát xác định danh tính tài xế taxi ngủ gật ',
          subtitle:
            'Phải mất rất nhiều công sức cảnh sát mới bắt được tên sát nhân thứ ba '
        },
        {
          title: 'Nhiều biệt thự, khu nghỉ dưỡng mọc trên đất nông nghiệp ',
          subtitle:
            'Lập chốt kiểm tra nồng độ cồn ngay sát một số quán bia rượu trên địa bàn quận Ba Đình'
        }
      ],
      cuisine: [
        {
          title: 'Những món ăn của người Việt khiến khách nước ngoài hãi hùng',
          subtitle:
            'Nếu không biết hôm nay nên nấu món gì, chị em có thể tham khảo thực đơn 4 món này.'
        },
        {
          title: '6 loại thực phẩm tuyệt đối không nên ăn khi bụng đói',
          subtitle:
            'Ẩm thực Thái Lan nổi tiếng với sự pha trộn đủ vị cha cay mặn ngọt, đặc biệt là ẩm.'
        },
        {
          title: 'Đi nước ngoài: Hở bao nhiêu, không nên mặc gì?',
          subtitle:
            'Do đặc tính riêng biệt, tôm hùm đất được xác định là sinh vật ngoại lai nguy hại và không'
        },
        {
          title: '5 phút biến tấu món salad dưa leo chim công đẹp ngon hết sảy',
          subtitle:
            'Để phát huy hiệu quả, sữa chua cần được sử dụng đúng thời điểm và đúng đối tượng.'
        }
      ],
      daubuoi: 'TIN TỨC THỊ TRƯỜNG'
    }
  }
}
</script>
