<template>
  <div class="container">
    <ol type="1">
      <li>
        <div class="context has-text-white">
          <h3 class="subtitle">Giải thích về xử lý phía Client và Server</h3>
          <p>
            Nếu mày sử dụng mounted hook, tức là page đã hiển thị sau đó mới
            fetch API, nói cách khác, mày đang get dữ liệu từ phía Client.
          </p>
          <p>
            Nuxtjs cung cấp cho mày 1 function để mày fetch API từ phía Server
            side là asyncData().
          </p>
          <p>
            Mở rộng 1 chút nhỏ, asyncData nó giống như data() nhưng nó wrap
            data() với context bên trong nó
          </p>
          <p>
            Để fetch data từ API phía server, thì mày chỉ cần lấy đoạn code
            Axios, vứt mẹ nó vào trong asyncData() là xong
          </p>
          <p>
            1 cái chú thích nho nhỏ, bt thì data() mình chỉ return array hoặc
            object, éo làm j thêm đc, nhưng thg asyncData() này vl hơn, gần như
            viết nguyên cả 1 function trong đó đc.
          </p>
          <p>
            Thêm 1 lưu ý, syncData() nó chạy phía Server nên window object là
            chưa có dữ liệu đâu.
          </p>
        </div>
      </li>
      <li>
        <div class="content has-text-white">
          <h3 class="subtitle">Get nhiều API</h3>
          <p>
            Vẫn sử dụng async/await gọi nhiều API, xong return hết 1 đống đó, nó
            sẽ tự động return hết 1 lượt thôi
          </p>
          <p>
            Đây, mới là câu truyện dkm khắm loz nè. Khi mày sang trang _id, nói
            cách khác, mày truyền id( trên url) từ home page sang trang _id thì
            đó là mày đang truyền phía Client, mà mày lại đang muốn xử lý phía
            Server ( trong hàm asyncData ) thì éo dùng đc this.id. Thế nên mày
            dùng thg {context} cho tao
          </p>
          <p>
            Nếu dùng mounted ( thằng chậm nhất ) thì head() nó chạy giữa éo có
            data để hiển thị. Nhưng nếu dùng asyncData( phía Server ) thì nó còn
            chạy trc cả thg head() nên có dữ liệu rồi, tha hồ SEO nhé.
          </p>
        </div>
      </li>
      <li>
        <div class="content has-text-white">
          <h3 class="subtitle">Phần này là Async với Vuex</h3>
          <p>Dm, nó lại sử dụng fetch() để dispatch action của store.</p>
          <p>Trong action, sau khi get API là nó commit Mutations, nhớ nhé.</p>
        </div>
      </li>
    </ol>
    <ol type="1">
      <li>
        <div class="content has-text-white">
          <h3 class="subtitle">Phần này là Phân biệt SSR với Pre-render</h3>
          <p>
            SSR thực ra vẫn cần Server. Còn Pre-render ko cần server, sử dụng
            Netlify hoặc GitPage thì sẽ đc free hosting
          </p>
          <p>
            Nếu trang web mà ko có Dynamic Routes thì Mặc định đã done với
            Pre-rendering already.
          </p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  layout: 'homeWithSidebar'
}
</script>

<style scoped></style>
