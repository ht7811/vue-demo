
var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iphone 7',
                price: '3988',
                count: 1
            },
            {
                id: 2,
                name: 'ipad Pro',
                price: '3588',
                count: 1
            },
            {
                id: 1,
                name: 'MacBook Pro',
                price: '13988',
                count: 1
            }
        ]
    },
    computed: {
        totalPrice: function(){
            var total = 0;
            for(var i = 0; i < this.list.length; i++){
                total += this.list[i].price * this.list[i].count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');//将结果转换为带有“千位分隔符”的数字
        }
    },//注意：计算computed要放在方法methods之前
    methods: {
        handleReduce: function(index){
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function(index){
            this.list[index].count++;
        },
        handleRemove: function(index){
            this.list.splice(index, 1);
        }
    }
})