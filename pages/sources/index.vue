<template>
  <div style="padding-top: 180px;">
    <div class="containerCV">
      <div class="AppStyle">
        <h1>{{title}}</h1>

        <div class="AppStyle_todoapp">
          <h2>{{nameApp.toDoList}}</h2>
          <section class="todoapp">
            <div class="header">
              <input
                class="new-todo"
                placeholder="What needs to be done?"
                v-model.trim="newTodo"
                @keyup.enter="createTodo"
                autofocus
              />
            </div>

            <!-- This section should be hidden by default and shown when there are todos -->
            <section class="main">
              <ul class="todo-list">
                <li
                  v-for="(todo,index) in filteredTodos"
                  :key="index"
                  :class="{completed: todo.isDone, editing: todo === editingTodo}"
                >
                  <div class="view">
                    <input class="toggle" type="checkbox" v-model="todo.isDone" />
                    <label @dblclick="startEditing(todo)">{{todo.text}}</label>
                    <button class="destroy" @click="destroy(todo)"></button>
                  </div>

                  <input
                    class="edit"
                    @keyup.escape="cancelEditing(todo)"
                    @keyup.enter="finishEditing(todo)"
                    @blur="finishEditing(todo)"
                    v-model.trim="todo.text"
                  />
                </li>
              </ul>
            </section>

            <!-- This footer should hidden by default and shown when there are todos -->
            <div class="footer">
              <span class="todo-count span">
                <strong>{{itemsLeft}}</strong> item(s) left
              </span>

              <!-- Remove this if you don't implement routing -->
              <ul class="filters">
                <li>
                  <router-link to="/all" :class="{ selected: status === 'all' }">All</router-link>
                </li>
                <li>
                  <router-link to="/active" :class="{ selected: status === 'active' }">Active</router-link>
                </li>
                <li>
                  <router-link
                    to="/completed"
                    :class="{ selected: status === 'completed' }"
                  >Completed</router-link>
                </li>
              </ul>

              <!-- Hidden if no completed items are left ↓ -->
              <button class="clear-completed" @click="clearCompleted">Clear completed</button>
            </div>
          </section>

          <div class="info">
            <p>Double-click to edit a todo</p>
            <p>Esc to cancel edit</p>
            <p>Enter to accept edit</p>
          </div>
        </div>

        <div class="AppStyle_menuToday">
          <h2>{{nameApp.menuToday}}</h2>
          <div class="menuToday">
            <div>Would you like something to eat?</div>
            <div class="links">
              <a @click="randomMenu()" class="button--green transitionForOne">Random Menu Today</a>
              <a @click="noIAmFull()" class="button--green transitionForOne">No, I'm full</a>
            </div>
            <div class="links">
              <div>{{mean.name}}</div>
              <div class="links" v-if="mean.id">
                <a class="button--show" v-if="!show" @click="showItem(mean.id), show = !show">
                  Show!
                </a>
                <a class="button--show" v-if="show" @click="showItem(mean.id), show = !show">
                  Hidden!
                </a>
              </div> 
              <!-- <a class="button--show" v-if="mean.id && hidden" @click="hidden = !hidden">Hidden!</a>  -->
            </div>
            <!-- <div class="links" v-if="tempMenu.name">
              => {{tempMenu.name}}
            </div> -->
            <div class="links" v-if="tempMenu.name">
              <transition name="fade">
                <p v-if="show">=> {{tempMenu.name}} </p>
              </transition>
            </div>


          </div>

        </div>

      </div>
    </div>

    <div class="containerCV" id="AboutMe">
      <div style="text-align:center;padding-top:60px;">
        Updating ...
      </div>
    </div>
  </div>
</template>

<script>
const LOCAL_STORAGE_KEY = "todo-app-vue";
export default {
  head() {
    return {
      title: this.title,
      meta: [{ hid: this.title, name: this.title, content: this.title }]
    };
  },
  data() {
    return {
      title: "Sources - by Nova",
      nameApp: {
        toDoList: "To-do List App",
        menuToday: "Menu Today"
      },
      todos: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [
        { text: "Learn JavaScript ES6+ goodies", isDone: true },
        { text: "Learn Vue", isDone: false },
        { text: "Build something awesome", isDone: false }
      ],
      editingTodo: null,
      newTodo: null,
      mean: {
        id: null,
        name: "Uhm ... ",
      },
      menu: [
        {id: 12,
        name: "Mây trắng vườn hồng",},
        {id: 1,
        name:"Ngưu ma vương hút thuốc",},
        {id: 2,
        name:"Chu bát giới đại náo chuồng gà",},
        {id: 3,
        name:"Hôm nay mình nhịn !!",},
        {id: 4,
        name:"Rồng xanh vượt đại dương",},
        {id: 5,
        name:"Thái dương hạ vân san",},
        {id: 6,
        name:"Hai cẳng chạy ra quán",},
        {id: 7,
        name:"Máu nhuộm bến thượng hải",},
        {id: 8,
        name:"Táo quân lội vạc dầu",},
        {id: 9,
        name:"Tóc rối thôi bay",},
        {id: 10,
        name:"Thủy quái đội lốt hoàng bào",},
        {id: 11,
        name:"Khoái lạc thủy cung",},
      ],
      menuShow: [
        {id: 12,
        name:"Canh trứng cà chua",},
        {id: 1,
        name:"Thịt trâu gác bếp",},
        {id: 2,
        name:"Thịt lợn kho trứng",},
        {id: 3,
        name:"Hết tiền nhịn đói !!",},
        {id: 4,
        name:"Rau muốn luộc",},
        {id: 5,
        name:"Trứng luộc",},
        {id: 6,
        name:"Nay ra quán ăn",},
        {id: 7,
        name:"Tiết canh",},
        {id: 8,
        name:"Cá chép chiên dầu",},
        {id: 9,
        name:"Mì ý",},
        {id: 10,
        name:"Tôm chiên xù",},
        {id: 11,
        name:"Canh sườn",},
      ],
      tempMenu: {
        id: null,
        name:"",
      },
      show: false
    };
  },
  methods: {
    destroy(todo) {
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
    },
    startEditing(todo) {
      this.editingTodo = todo;
      this.beforeText = todo.text;
    },
    finishEditing(todo) {
      this.editingTodo = null;
    },
    cancelEditing(todo) {
      this.editingTodo = null;
      todo.text = this.beforeText;
    },
    createTodo() {
      if (this.newTodo.length) {
        this.todos.push({ text: this.newTodo, isDone: false });
        this.newTodo = null;
      }
    },
    clearCompleted() {
      this.todos = this.activeTodos;
    },

    //menu to day
    randomMenu(){
      var keys = Object.keys(this.menu);
      this.mean = this.menu[keys[ keys.length * Math.random() << 0]];
      this.tempMenu.name = "";
      this.tempMenu.id = null;
      //return this.mean = this.menu[Math.floor(Math.random()*this.menu.length)];
    },
    noIAmFull(){
      this.mean.id = null;
      this.mean.name = "See you!";
    },
    showItem(meanId){
      this.tempMenu = this.menuShow.find(x => x.id == meanId);
    }
  },
  computed: {
    itemsLeft() {
      return this.todos.filter(t => !t.isDone).length;
    },
    status() {
      return this.$route.params.status;
    },
    activeTodos() {
      return this.todos.filter(t => !t.isDone);
    },
    completedTodos() {
      return this.todos.filter(t => t.isDone);
    },
    filteredTodos() {
      switch (this.status) {
        case "active":
          return this.activeTodos;
        case "completed":
          return this.completedTodos;

        default:
          return this.todos;
      }
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newValue) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.AppStyle {
  html,
  body {
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    -webkit-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }

  :focus {
    outline: 0;
  }

  .hidden {
    display: none;
  }
  .button--show{
    color: #00c58e;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    border-color: #00c58e;
  }
  .todoapp {
    background: #fff;
    margin: 12px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .todoapp input::-webkit-input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .todoapp input::-moz-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  .todoapp input::input-placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
  h1 {
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: #35495e;
    //color: rgba(175, 47, 47, 0.15);
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
  h2 {
    width: 100%;
    font-size: 60px;
    font-weight: 100;
    text-align: center;
    color: #35495e3d;
    -webkit-text-rendering: optimizeLegibility;
    -moz-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }

  .new-todo,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .new-todo {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }

  .main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
  }

  .toggle-all {
    width: 1px;
    height: 1px;
    border: none; /* Mobile Safari */
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;
  }

  .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .toggle-all + label:before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked + label:before {
    color: #737373;
  }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }

  .todo-list li:last-child {
    border-bottom: none;
  }

  .todo-list li.editing {
    border-bottom: none;
    padding: 0;
  }

  .todo-list li.editing .edit {
    display: block;
    width: 506px;
    padding: 12px 16px;
    margin: 0 0 0 43px;
  }

  .todo-list li.editing .view {
    display: none;
  }

  .todo-list li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
  }

  .todo-list li .toggle {
    opacity: 0;
  }

  .todo-list li .toggle + label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center left;
  }

  .todo-list li .toggle:checked + label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
  }

  .todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }

  .todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  .todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
  }

  .todo-list li .destroy:hover {
    color: #af5b5e;
  }

  .todo-list li .destroy:after {
    content: "×";
  }

  .todo-list li:hover .destroy {
    display: block;
  }

  .todo-list li .edit {
    display: none;
  }

  .todo-list li.editing:last-child {
    margin-bottom: -1px;
  }

  .footer {
    color: #777;
    padding: 44px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }

  .footer:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  .todo-count {
    float: left;
    text-align: left;
  }

  .todo-count strong {
    font-weight: 300;
  }

  .filters {
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
  }

  .filters li {
    display: inline;
  }

  .filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  .filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  .clear-completed,
  html .clear-completed:active {
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }

  .info {
    margin: 65px auto 65px;
    color: #bfbfbf;
    font-size: 16px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
  }

  .info p {
    line-height: 1;
  }

  .info a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
  }

  .info a:hover {
    text-decoration: underline;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    .toggle-all,
    .todo-list li .toggle {
      background: none;
    }

    .todo-list li .toggle {
      height: 40px;
    }
  }

  @media (max-width: 430px) {
    .footer {
      height: 50px;
    }

    .filters {
      bottom: 10px;
    }
  }
}

// app menu today
.menuToday{
  text-align: center
}
</style>