// Vueインスタンス
const app = Vue.createApp({
  data: () => ({
    // 使う値をここで定義するみたいな感じか
    newItem: '',
    todos: []
  }),
  // event handler
  methods: {
    // MTODO eventってvoid的なこと？
    addItem: function(event) {
      //console.log("Click!!")
      // varidation
      if (this.newItem === '') return
      // todoというobject
      let todo = {
        // プロパティ item : 値　this.newItem
        item: this.newItem,
        isDone: false
      }
      // pushは配列todosに追加
      this.todos.push(todo)
      // 入力後formは空白にする
      this.newItem = ''
    },
    // event handler
    deleteItem: function(index) {
      // 第一引数:削除を始める　第二引数:size
      this.todos.splice(index, 1)
    }
  }
})
app.mount("#app");
