var express = require('express');
var router = express.Router();
var fs = require('fs');
var PATH = './public/data/';

//读取数据模块
router.get('/read', function (req, res, next) {
    var type = req.param('type') || '';
    fs.readFile(PATH + type + '.json', function (err, data) {
        if (err) {
            return res.send({
                status: 0,
                info: '文件读取异常'
            });
        }

        var COUNT = 50;
        var obj = JSON.parse(data.toString());

        if (obj.length > 50) {
            obj = obj.slice(0, COUNT);
        }

        return res.send({
            status: 1,
            info: obj
        });
    });
});


//数据存储模块
router.get('./write',function (req,res,next) {
	//文件名
	var type = req.param('type') || '';
	//url
	var url = req.param('url') || '';
	//img
	var img = req.param('img') || '';
	//title
	var title = req.param('title') || '';

	if (!type || !url || !img || !title) {
		return res.send({
			status:0,
			info:'文件写入失败'
		})
	}
})


//guid
function guidGenerate() {
    var guid = "";
    for (var i = 1; i <= 32; i++) {
        var n = Math.floor(Math.random() * 16.0).toString(16);
        guid += n;
        if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
            guid += "-";
    }
    return guid;
}

module.exports = router;
