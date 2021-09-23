class PubSub {
  list: {
    [x: string]: Array<() => void>
  };
  constructor() {
    this.list = {}
  }
  // 添加订阅
  subscribe(key: string, fn: () => void) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    this.list[key].push(fn);
  }
  // 取消订阅
  unSubscribe(key: string) {
    delete this.list[key];
  }
  // 发布通知
  publish(key: string): undefined | void {
    if (!this.list[key]) return;
    let arr = this.list[key];
    for (var j = 0; j < arr.length; j++) {
      arr[j]()
    }
  }
}

const historyPub = new PubSub();
window.addHistoryListener = function (fn) {
  historyPub.subscribe('historyChange', fn);
}
history.pushState = function () {
  const method = history['pushState'];
  return function () {
    method.apply(history, arguments as any);
    historyPub.publish('historyChange');
  }
}()

history.replaceState = function () {
  const method = history['replaceState'];
  return function () {
    method.apply(history, arguments as any);
    historyPub.publish('historyChange');
  }
}()