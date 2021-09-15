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

// class Dep {                  // 订阅池
//   constructor(name) {
//     this.id = new Date() //这里简单的运用时间戳做订阅池的ID
//     this.subs = []       //该事件下被订阅对象的集合
//   }
//   defined() {              // 添加订阅者
//     Dep.watch.add(this);
//   }
//   notify() {              //通知订阅者有变化
//     this.subs.forEach((e, i) => {
//       if (typeof e.update === 'function') {
//         try {
//           e.update.apply(e)  //触发订阅者更新函数
//         } catch (err) {
//           console.warn(err)
//         }
//       }
//     })
//   }

// }
// Dep.watch = null;

// class Watch {
//   constructor(name, fn) {
//     this.name = name;       //订阅消息的名称
//     this.id = new Date();   //这里简单的运用时间戳做订阅者的ID
//     this.callBack = fn;     //订阅消息发送改变时->订阅者执行的回调函数     
//   }
//   add(dep) {                  //将订阅者放入dep订阅池
//     dep.subs.push(this);
//   }
//   update() {                  //将订阅者更新方法
//     var cb = this.callBack; //赋值为了不改变函数内调用的this
//     cb(this.name);
//   }
// }


var addHistoryMethod = function () {
  var historyPub = new PubSub();
  return function (name) {
    if (name === 'historyChange') {
      return function (name, fn) {
        // var event = new Watch(name, fn)
        // Dep.watch = event;
        historyPub.subscribe(name, fn);
        // Dep.watch = null;       //置空供下一个订阅者使用
      }
    } else if (name === 'pushState' || name === 'replaceState') {
      const method = history[name];
      return function () {
        method.apply(history, arguments);
        historyPub.publish();
      }
    }
  }
}

window.addHistoryListener = addHistoryMethod('historyChange')
history.pushState = addHistoryMethod('pushState');
history.replaceState = addHistoryMethod('replaceState');