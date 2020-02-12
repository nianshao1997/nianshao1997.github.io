<template>
    <div class="wrapper">
        <h2 class="title">这是订单页面</h2>
        <div class="content-box">
            <div class="content">
            <div class="over">
                <h2>单号:{{num}}</h2>
                <button class="submit">提交订单</button>
            </div>
           
            <div class="order">
            <div class="details">
                <span v-for="(item,index) in details" :key="index">{{item}}</span>
            </div>
               <ul class="order-item" v-for="(item,index) in datas" :key="index">
                   <li>{{index}}</li>
                   <li>{{item.name}}</li>
                   <li>{{item.price}}</li>
                    <li class="sum">
                       <span class="left" @click="item.sum = item.sum ? --item.sum : 0">&#xe616;</span> 
                       <div>{{item.sum}}</div>
                       <span class="right" @click="++item.sum">&#xe600;</span>
                    </li>
                   <li>{{item.sum * item.price}}</li>
                   <li>{{item.append}}</li>
                   <li>{{item.kind}}</li>
                   <li class="icon" @click="del(index)">&#xe60b;</li>
               </ul>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'order',
    // props:{
    //     datas:String
    // },
    data(){
        return{
            num:123456,
            details:['序号','菜名','单价','数量','价格','备注','种类','删除'],
            datas:[
                {
                    name:'啤酒',
                    price:12,
                    sum:9,
                    append:'冰镇',
                    kind:'饮料'
                },
                 {
                    name:'烤鸭',
                    price:20,
                    sum:3,
                    append:'加辣',
                    kind:'熟肉'
                },
                 {
                    name:'麻辣牛肉',
                    price:50,
                    sum:2,
                    append:'微辣',
                    kind:'肉类'
                }
            ]
        }
    },
    methods:{
        del(index){
            this.datas.splice(index,1)
        }
    }
}
</script>
<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1618339 */
  src: url('//at.alicdn.com/t/font_1618339_mw8f65ujg5h.eot');
  src: url('//at.alicdn.com/t/font_1618339_mw8f65ujg5h.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1618339_mw8f65ujg5h.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1618339_mw8f65ujg5h.woff') format('woff'),
  url('//at.alicdn.com/t/font_1618339_mw8f65ujg5h.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1618339_mw8f65ujg5h.svg#iconfont') format('svg');
}
@font-face {
  font-family: 'iconfont';  /* project id 1618340 */
  src: url('//at.alicdn.com/t/font_1618340_zpytj41cfd.eot');
  src: url('//at.alicdn.com/t/font_1618340_zpytj41cfd.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1618340_zpytj41cfd.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1618340_zpytj41cfd.woff') format('woff'),
  url('//at.alicdn.com/t/font_1618340_zpytj41cfd.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1618340_zpytj41cfd.svg#iconfont') format('svg');
}
.left,
.right{
    font-family: 'iconfont';
    color:rgb(10, 85, 39);
}
.icon{
    font-family: 'iconfont';
}
.icon:hover,
.left:hover,
.right:hover{
    color: yellowgreen;
    cursor: pointer;
}
.wrapper{
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
}
.title{
    width: 100%;
    height: 20px;
    padding-bottom: 100px;
    box-sizing: border-box;
    background-color: pink;
    line-height: 100px;
    text-align: center;
}
.content-box{
    width: 100%;
    padding-left: 50px;
    padding-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.content{
    width: 80%;
    border-radius: 30px;
    box-sizing: border-box;
    overflow: hidden;
}
.over{
    width: 100%;
    padding: 16px;
    background-color: rgb(129, 108, 87);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}
.over h2{
    padding:10px;
    box-sizing: border-box;
}
.submit{
    box-shadow: -4px 4px 4px #888888;
    padding: 16px 30px;
    border-radius: 10px;
    border: none;
    box-sizing: border-box;
}
.details{
    display: grid;
    grid-template-columns: repeat(8,1fr);
    width: 100%;
}
.details span{
    padding: 26px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.order-item,
ul{
    width: 100%;
    box-sizing: border-box;
}

ul{
    display: grid;
    grid-template-columns: repeat(8,1fr);
    list-style: none;
}
ul li{
    padding: 26px 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.sum{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
}
.sum div{
    padding: 0 10px;
    padding: 12px 22px;
    box-sizing: border-box;
}
*{
    white-space: nowrap !important;
}
</style>