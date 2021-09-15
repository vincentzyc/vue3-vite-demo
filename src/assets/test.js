function PubSub() {
  this.list = {};   // 主题列表
}
PubSub.prototype = {
  // 添加订阅
  subscribe: function (key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  },
  // 取消订阅
  unSubscribe: function (key) {
    delete this.list[key];
  },
  // 发布通知
  publish: function (key, para) {
    if (!this.list[key]) {
      alert('没有该主题---');
      return;
    }
    let arr = this.list[key];
    for (var j = 0; j < arr.length; j++) {
      arr[j](para);
    }
  }
}
var Pub = new PubSub();
// 为不同主题（如主题sing或者dance）添加订阅者
Pub.subscribe('sing', function (songName) {
  console.log('sing 订阅者01 歌名为 ', songName)
})
Pub.subscribe('sing', function (songName) {
  console.log('sing 订阅者No2 歌名为 ', songName)
})
Pub.subscribe('dance', function (para) {
  console.log('dance 订阅者 歌名为 ', para)
})
// 根据不同主题（如主题sing或dance），发布不同消息
Pub.publish('sing', 'Heal the word');
Pub.publish('dance', '华尔兹舞曲');
// 最后输出结果：
// sing 订阅者01 歌名为  Heal the word
// sing 订阅者No2 歌名为  Heal the word
// dance 订阅者 歌名为  华尔兹舞曲
