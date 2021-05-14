var origin = 'https://api.dev.shantaijk.cn';
var base = '/api';

if(!window.stjk){
  window.stjk = {
    apiUrl: {
      origin,
      base,
      baseUrl: origin + base,
    },
    fileUrl: 'https://file-gw.dev.shantaijk.cn',
    ossUrl: 'https://oss-pub.dev.shantaijk.cn',
  };
}
