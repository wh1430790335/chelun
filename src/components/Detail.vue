<template>
    <div>
        <div>
            <img src="">
        </div>
        <li class="year">
            <span @click="changeYear(item)" v-for="(item, index) in years" :key="index" :class="currentYear==item?'active':''">{{item}}</span>
        </li>
        <section>
             <ul v-for="(item, index) in list" :key="index">
                <p class="tit">{{index}}</p>
                <li v-for="(value, key) in item" :key="key">
                        <p>{{value.market_attribute.year+'款 '+value.car_name}}</p>
                        <p>{{`${value.max_power}马力${value.gear_num}档${value.trans_type}`}}</p>
                        <p>
                            <span>{{`指导价${value.market_attribute.dealer_price_min}`}}</span>
                            <span>{{value.market_attribute.official_refer_price}}</span>
                        </p>
                        <p @click="goDialog()">
                            
                            询问底价
                        </p>
                </li>
                
            </ul>
            
        </section>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        computed: {
            ...mapState({
                currentYear: state=>state.detail.currentYear
            }),
            ...mapGetters({
                years: 'detail/years',
                list: 'detail/list'
            })
        },
        methods: {
            ...mapActions({
                getDetailList: 'detail/getDetailList'
            }),
            ...mapMutations({
                changeYear: 'detail/changeYear'
            }),
            goDialog(id){
                this.$route.push({path:'/dialog', query:{id}})
            }
        },
        mounted(){
            this.getDetailList(this.$route.query.id);
            // console.log(this.$route)
        },
        updated(){
            console.log('years...', this.years, this.currentYear);
        }
    }
</script>

<style lang="scss">
*{
    padding:0;
    margin:0;
    font-size: 0.3rem;
}
body{
    background-color: #eee;
}
ul,li{
    list-style: none;
}
.year{
    width:100%;
    font-size:0.4rem;
    height:0.8rem;
    line-height: 0.8rem;
    background-color: #fff;
}
.year>span{
    display:block-inline;
    padding:0.2rem 0.4rem;
}
.active{
    color:skyblue;
}
.tit{
    width:100%;
    font-size: 0.3rem;
    background-color: #eee;
}
li{
    background-color: #fff;
    margin:0.2rem  0;
}
li>p:nth-child(1){
    width:100%;
}
li>p:nth-child(2){
    width:100%;
    color:#ccc;
   
}
li>p:nth-child(3){
    width:100%;
     text-align: end;
     border-bottom:0.01rem solid skyblue;   
}
li>p:nth-child(3)>span:last-child{
    color:red;
}
li>p:nth-child(4){
    color:skyblue;
    text-align: center;
    padding:0.2rem 0;
}
</style>


  