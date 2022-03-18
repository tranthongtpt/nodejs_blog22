const res = require("express/lib/response");

class NewsControllers{
    
    //[GET] /news
    index(req,res){
        res.render('news');
    }

    //[get] /news:/slug
    show(req,res) {
        res.send('new detail')
    }
}

module.exports=new NewsControllers;
