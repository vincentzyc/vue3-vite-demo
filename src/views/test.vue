<template>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <!-- 优惠券单元格 -->
  <CouponCell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
  <!-- 优惠券列表 -->
  <Popup v-model:show="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
    <CouponList
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      :disabled-coupons="disabledCoupons"
      @change="onChange"
      @exchange="onExchange"
    />
  </Popup>
  <Button color="#7232dd" @click="pushqq()">pushqq</Button>
  <Button color="#7232dd" plain @click="gohaha">gohaha</Button>
  <Button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="pageCanvas()">html2canvas</Button>

  <Popup v-model:show="showCanvas" round position="center" style="height: 90%; padding-top: 4px;">
    <div id="canvasWrap"></div>
  </Popup>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { Button, CouponCell, Popup, CouponList } from 'vant';
import html2canvas from "html2canvas"
import { QRouter } from "@/QueryRouter"
import Axios from "@/plugins/axios"

const count = ref(0)

const gohaha = () => {
  QRouter.push('haha')
}

const coupon = {
  id: 111,
  available: 1,
  condition: '无使用门槛\n最多优惠12元',
  description: '描述信息，优惠券可用时展示',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
};

const coupons = ref([coupon])
const showList = ref(false)
const showCanvas = ref(false)
const chosenCoupon = ref(-1)

const onChange = (index: number) => {
  showList.value = false;
  chosenCoupon.value = index;
};
const onExchange = (code: any) => {
  coupons.value.push(coupon);
};
const disabledCoupons = [coupon]

const pageCanvas = () => {
  const elApp = document.body
  if (elApp) {
    html2canvas(elApp, {
      allowTaint: true,
      useCORS: true //尝试使用 CORS 从服务器加载图像
    }).then(async canvas => {
      showCanvas.value = true;
      await nextTick()
      const canvasWrap = document.getElementById("canvasWrap")
      canvasWrap?.appendChild(canvas)

      canvas.toBlob(blob => {
        let formData = new FormData()
        if (blob) {
          let files = new File([blob], 'test.png', {type: 'png'})
          formData.append('directoryName', 'content-h5')
          formData.append('file', files)
        }
        Axios.post('https://xxx.com', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      })
      // const image = new Image()
      // image.src = canvas.toDataURL("image/png")
      // console.log(image)
    });
  }
}

const pushqq = () => {
  history.pushState(null, '', '?id=qq')
}
</script>