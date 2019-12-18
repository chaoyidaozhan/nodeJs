export default{
    //设置数据
    data:{
        "flag":1,
        "data":{
            "hasPermission":true,
            "sequence":"bbb"
        }
    },
    
    init(app){
        app.get('/aaa/start', (req, res)=>{
            // res.end(data)
            res.json(JSON.stringify(this.data))
        })
    }
}

// module.exports.init = init