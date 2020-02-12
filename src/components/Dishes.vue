<template>
    <div class="wrapper">
        <div class="kinds">
            <span v-for="(item,index) in kinds" :key="index" @click="handleKinds(item,index)" :class="{active:num === index}">{{item}}</span>
        </div>
       <div class="content-box">
           <div class="content">
               <div class="item" v-for="(item,index) in dishes" :key="index">
                   <img :src="item.img">
                   <div class="bottom">
                   <div class="left">
                    <span>{{item.name}}</span>
                    <span class="rmb">RMB<span class="price">{{item.price}}/份</span></span>
                   </div>
                   <span class="right">&#xe60b;</span>
                   </div>
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
            num:0,
            kinds:['热菜','凉菜','汤类','饮料','其他'],
            dishes:[
                {
                    img:'https://bkimg.cdn.bcebos.com/pic/8b13632762d0f70342fbeff703fa513d2697c554?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxMTY=,xp_5,yp_5',
                    name:'可乐鸡翅',
                    price:22
                },
                {
                    img:'https://bkimg.cdn.bcebos.com/pic/8b13632762d0f70342fbeff703fa513d2697c554?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxMTY=,xp_5,yp_5',
                    name:'可乐鸡翅',
                    price:22
                },
                {
                    img:'https://bkimg.cdn.bcebos.com/pic/8b13632762d0f70342fbeff703fa513d2697c554?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxMTY=,xp_5,yp_5',
                    name:'可乐鸡翅',
                    price:22
                },{
                    img:'https://bkimg.cdn.bcebos.com/pic/8b13632762d0f70342fbeff703fa513d2697c554?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxMTY=,xp_5,yp_5',
                    name:'可乐鸡翅',
                    price:22
                },
                {
                    img:'https://bkimg.cdn.bcebos.com/pic/8b13632762d0f70342fbeff703fa513d2697c554?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxMTY=,xp_5,yp_5',
                    name:'可乐鸡翅',
                    price:22
                },
                // {
                //     img:'https://bkimg.cdn.bcebos.com/pic/8b13632762d0f70342fbeff703fa513d2697c554?x-bce-process=image/watermark,g_7,image_d2F0ZXIvYmFpa2UxMTY=,xp_5,yp_5',
                //     name:'可乐鸡翅',
                //     price:22
                // }
                ]
        }
    },
    methods:{
        handleKinds(item,index){
            this.num = index
        }
    }
}
</script>
<style scoped>
@font-face {
  font-family: 'iconfont';  /* project id 1618340 */
  src: url('//at.alicdn.com/t/font_1618340_q8pkw08cdg.eot');
  src: url('//at.alicdn.com/t/font_1618340_q8pkw08cdg.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1618340_q8pkw08cdg.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1618340_q8pkw08cdg.woff') format('woff'),
  url('//at.alicdn.com/t/font_1618340_q8pkw08cdg.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1618340_q8pkw08cdg.svg#iconfont') format('svg');
}
.wrapper{
    display: flex;
    flex-direction: column;
}
.kinds{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
    background-color:rgb(209, 204, 197);
}
.kinds span{
    padding: 10px 36px;
    border-radius: 20px;
    background-color: antiquewhite;
}
.kinds span:hover{
    background-color: pink;
    color: white;
}
.active{
    color: white;
    background-color: pink !important;
}
.content-box{
    padding:20px 40px;
    box-sizing: border-box;
    width: 100%;
}
.content{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    /* justify-content: space-between; */
}
.item{
    margin: 20px;
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    overflow: hidden;
    box-sizing: border-box;
}
.item img{
    width: 100%;
    height: 160px;
}
.item .bottom{
    background-color: blanchedalmond;
    padding:20px;
    height: 60px;
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
}
.left{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center
}
.right{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'iconfont';
    font-size: 20px;
}
.rmb{
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.price{
    font-size: 20px;
    color: brown;
}

</style>