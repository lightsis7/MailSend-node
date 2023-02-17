var http = require('http'); 
var fs = require('fs');

var querystring = require('querystring');

var express = require('express')
var app = express()
// const mailer = require('./Gmail');
const mailer = require('./Naver_mail')

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000, function(){
  console.log("start! express server is running")
})
	
//AJAX GET METHOD
app.get('/',function(req,res) {
 
       fs.readFile('./index.js' ,'utf8' ,function(error, data) {
		   console.log(__dirname);
			console.log(__filename);
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    
 
});
 
 
//AJAX POST METHOD
app.post('/api/post', function(req, res){
 
    var data = req.body;
 
      console.log('POST Parameter = ' + data);
 
	  var msg =  'success';
      var result = {result:true , msg:msg};
	  
	  console.log('result= ' + result);
 
      res.send(result);
 
});

//AJAX POST METHOD
app.post('/api/sendmail', function(req, res){
 
    var data = req.body;
 
		// 메일 내용
		var txt = "지역 : " + data.region + "\n";
			txt = txt + "주거형태 : " + data.type + "\n";
			txt = txt + "이름 : " + data.name + "\n";
			txt = txt + "email 주소 : " + data.email + "\n";
		console.log('txt= ' + txt);
		
		let emailParam = {
		toEmail: 'lightsis7@gmail.com',     // 수신할 이메일

		subject: '새로운 의뢰가 ' + data.region + ' 에 들어 왔습니다',   // 메일 제목
		text: txt 
		
	  };

	  mailer.sendGmail(emailParam);

	  res.status(200).send("success");
 
});