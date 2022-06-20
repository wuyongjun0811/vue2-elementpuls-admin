import Mock from "mockjs";
let List=[]
export default {
    getData:()=>{
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    iphone12:Mock.Random.float(100,8000,0,0),
                    iphone13:Mock.Random.float(100,8000,0,0),
                    iphone13Pro:Mock.Random.float(100,8000,0,0),
                    iphone11:Mock.Random.float(100,8000,0,0),
                })
            )
        }
        return{
            code:20000,
            data:{
            //饼图
                videoData:[
                    {
                        name:"iphone13",
                        value:2315,
                    },
                    {
                        name:"iphone13Pro",
                        value:1280,
                    },
                    {
                        name:"iphone12",
                        value:1000,
                    },
                    {
                        name:"iphone12Pro",
                        value:1580,
                    },
                    {
                        name:"iphone11Pro",
                        value:1200,
                    },
                    {
                        name:"iphone11",
                        value:2800,
                    },
                    {
                        name:"iphone12ProMax",
                        value:1300,
                    },
                ],
            //柱状图
                userData:[
                    {
                        data:"周一",
                        new:50,
                        active:150,
                    },
                    {
                        data:"周二",
                        new:20,
                        active:200,
                    },
                    {
                        data:"周三",
                        new:35,
                        active:200,
                    },
                    {
                        data:"周四",
                        new:40,
                        active:300,
                    },
                    {
                        data:"周五",
                        new:20,
                        active:320,
                    },
                    {
                        data:"周六",
                        new:50,
                        active:500,
                    },
                    {
                        data:"周日",
                        new:80,
                        active:400,
                    },
                ],
            //折线图
                orderData:{
                    date:['20220102','20220103','20220104','20220105','20220106','20220107'],
                    data:List,
                },
                tableData:[
                    {
                        name:"iphone12",
                        todayBuy:10,
                        monthBuy:300,
                        totalBuy:1654,
                    },
                    {
                        name:"iphone12Pro",
                        todayBuy:12,
                        monthBuy:360,
                        totalBuy:1200,
                    },
                    {
                        name:"iphone13",
                        todayBuy:20,
                        monthBuy:1000,
                        totalBuy:1680,
                    },
                ]
            }
        }
    }
}