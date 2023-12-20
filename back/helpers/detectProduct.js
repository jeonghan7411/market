const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const fs = require('fs');
// const path = require('path'); // 경로를 찾아주기위해 path 모듈 사용

module.exports = function detectProduct(url,callback){
  const image = fs.readFileSync(url);
  const input = tf.node.decodeImage(image, 3);
  mobilenet.load().then((model)=>{
    model.classify(input).then((result)=>{
      callback(result[0].className);
    })
  });
};

//__dirname  => 현재 파일 위치 
// detectProduct(path.join(__dirname,'../uploads/notebook1.jpg'));
// detectProduct(path.join(__dirname,'../uploads/basketball2.jpg'),function(data){
//   console.log(data);
// });