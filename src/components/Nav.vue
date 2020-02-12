<template>
    <div class="wrapper">
        <div class="login-box">
            <img src="../assets/p3.jpg" alt="头像">
            <span class="name" v-if="login">杨远华</span>
            <span class="login" v-if="!login">登录</span>
            <span class="exit" v-if="!login">注册</span>
        </div>
        <div class="kinds" v-for="(item,index) in kinds" :key='index'>
        <router-link :to='item.path'>
        <div @click="handleItem(item,index)">
            <img :src="item.img">
            <span>{{item.span}}</span>
        </div>
        </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'SideBar',
    data(){
        return{
            login:false,
            kinds:[
                {
                    img:'//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCmzJm6SCSaeEfYCXXFdUsTSvWmXogcViaiapEWVbkibjQAr9SIuhBaL91vUGia1IAcDBI/356?tp=webp',
                    span:'主页',
                    path:'/'
                },
                {
                    img:'//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCmzJm6SCSaeEfYCXXFdUsTSvWmXogcViaiapEWVbkibjQAr9SIuhBaL91vUGia1IAcDBI/356?tp=webp',
                    span:'菜单',
                    path:'dishes'
                },
                {
                    img:'//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCmzJm6SCSaeEfYCXXFdUsTSvWmXogcViaiapEWVbkibjQAr9SIuhBaL91vUGia1IAcDBI/356?tp=webp',
                    span:'订单',
                    path:'order'
                },
                {
                    img:'//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCmzJm6SCSaeEfYCXXFdUsTSvWmXogcViaiapEWVbkibjQAr9SIuhBaL91vUGia1IAcDBI/356?tp=webp',
                    span:'管理',
                    path:'/manage'
                },
                {
                    img:'//10.url.cn/qqcourse_logo_ng/ajNVdqHZLLCmzJm6SCSaeEfYCXXFdUsTSvWmXogcViaiapEWVbkibjQAr9SIuhBaL91vUGia1IAcDBI/356?tp=webp',
                    span:'关于',
                    path:'/about'
                }
            ]
        }
    },
    methods:{
        handleItem(item,index){
            window.console.log(item,index)
        }
    }
}
</script>
<style scoped>
.wrapper{
    width: 20% !important;
    padding-top: 100px;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.login-box{
    background-color: rgba(100, 10, 100, .2);
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 0;
    padding-bottom: 20px;
    box-sizing: border-box;
}
.login-box span{
    cursor: pointer;
    padding: 6px;
    border-radius: 15px;
    box-sizing: border-box;
}
.login-box span:hover{
    background-color:rgb(255, 0, 76);
    color: white;
}
.kinds{
    background-color: rgba(100, 10, 100, .2);
    width: 100%;
    flex-grow: 1
}
.kinds div{
    width: 100%;
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.kinds div:hover{
    background-color: gray;
}
.kinds span{
    margin-left: 15px;
}
img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
a{
    text-decoration: none;
    color: #333333
}

/* .home-box,
.menu-box,
.order-box,
.manage-box,
.about-box
{
    width: 100%;
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:1.5em;
} */

/* .home-box:hover,
.menu-box:hover,
.order-box:hover,
.manage-box:hover,
.about-box:hover{
    background-color: gray;
} */
</style>