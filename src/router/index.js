import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),

  },
  {
    path: '/chatroom/:id',
    name: "chatroom",
    component: () =>import( "../views/ChatRoom.vue"),
  },
  {
    path: "/addName",
    name: "addName",
    component: () =>import( "../views/addName.vue"),
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: import( "../views/NotFound.vue") },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  //localStorage.setItem("lastname", "Smith");
  console.log(to);
  console.log(from);
 const uname = localStorage.getItem('uname');
 console.log("dddd")
 console.log(uname)
 if( (uname == null || uname == '' || uname == undefined) && to.path == '/' ){
   console.log("innnnn")
    next({name : 'addName'})
 }
 else{
   next()
 }
})

export default router;
