<template>
    <div class="wrapper">
        <h2 class="title">这是管理页面</h2>
        <div class="content">
            <h2 class="cai">添加菜名</h2>
            <div class="add">
               <div class="add-item" v-for="(item,index) in addList" :key="index">
                   <span>{{item}}</span>
                   <input type="text">
               </div>
               <button class="btn">添加</button>
            </div>
            <h2 class="rem">添加菜名</h2>
            <div class="del">
                <div class="del-item" v-for="(item,index) in delList" :key='index'>
                    <h3 class="del-name">{{item}}</h3>
                    <h3 class="del-click">删除</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Dishes',
    data(){
        return{
            addList:['菜名: ','分类: ','单价: ','图片: '],
            delList:['啤酒','可乐鸡翅','手撕鸡','可口可乐','汉堡包']
        }
    }
}
</script>
<style scoped>
.wrapper{
    display: flex;
    flex-direction: column;
}
.content{
    padding-left: 50px;
    align-self: flex-start;
    padding-top: 30px;
}
.cai,.rem{
    padding-bottom: 20px;
    color:darkred;
}
.add,.del{
    padding-left: 20px;
}
.add-item,.del-item{
    padding-bottom: 6px;
    box-sizing: border-box;
}
.add{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    box-sizing: border-box;
}
.btn{
    padding:8px 16px;
}
.del-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.del-item{
    padding-bottom: 10px;
}

.del-click{
    color: rgb(41, 38, 2)
}
input{
    height: 30px;
    width: 300px;
}
.title{
    height: 20px;
    padding-bottom: 100px;
    box-sizing: border-box;
    background-color: pink;
    line-height: 100px;
    text-align: center;
}
</style>