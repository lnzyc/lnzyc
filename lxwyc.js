load_data();
var wdda="";
var wddaa="";
var wddab="";
var wddac="";
var wddad="";
function load_data()
{
var select_str;
document.getElementById('id_count').innerHTML = '<b>' + id_count + '</b> ';
			if (id_count == 0)
			{
				 
				return false;
			}
document.getElementById('numflag').value = numflag + 1 ; 
document.getElementById('id_qus').innerHTML = '<b>' + (numflag + 1) + '. ' + list1[numflag][2] + '</b> ';
if( list1[numflag][9]!='2'){
document.getElementById('id_ans1').innerHTML = '<a href="javascript:a(1);"><p>A、' + list1[numflag][3] + '</p></a>';
document.getElementById('id_ans2').innerHTML = '<a href="javascript:a(2);"><p>B、' + list1[numflag][4] + '</p></a>';
if (list1[numflag][5]!=''){document.getElementById('id_ans3').innerHTML = '<a href="javascript:a(3);"><p>C、' + list1[numflag][5] + '</p></a>';}
else{document.getElementById('id_ans3').innerHTML = '';}
if (list1[numflag][6]!=''){document.getElementById('id_ans4').innerHTML = '<a href="javascript:a(4);"><p>D、' + list1[numflag][6] + '</p></a>';}
else{document.getElementById('id_ans4').innerHTML = '';}
}
else
{
document.getElementById('id_ans1').innerHTML = '<a href="javascript:ans1();"><p>a、' + list1[numflag][3] + '</p></a>';
document.getElementById('id_ans2').innerHTML = '<a href="javascript:ans2();"><p>b、' + list1[numflag][4] + '</p></a>';
document.getElementById('id_ans3').innerHTML = '<a href="javascript:ans3();"><p>c、' + list1[numflag][5] + '</p></a>';
document.getElementById('id_ans4').innerHTML = '<a href="javascript:ans4();"><p>d、' + list1[numflag][6] + '</p></a>';
document.getElementById('id_xd').innerHTML = '<a href="javascript:ansOK();">多选题，点击选项后点此确定</a>';
document.getElementById('id_xd').style.display = '';
}

document.getElementById('id_jieshi').innerHTML = '标准答案：<font size=4 color="red"><b>' + list1[numflag][15] + '</b></font><br />解释：' + list1[numflag][10];
document.getElementById('id_ans1').className = 'p1';
document.getElementById('id_ans2').className = 'p1';
document.getElementById('id_ans3').className = 'p1';
document.getElementById('id_ans4').className = 'p1';
if (list1[numflag][8]!=''){
document.getElementById('id_bmp').innerHTML = '<img src="http://pic.jszksw.com/wyc/' + list1[numflag][8] + '" border="0" >';
}
else
{document.getElementById('id_bmp').innerHTML = '';}
}

function showexplain()
		{
			
			if (document.getElementById('id_jieshi').style.display == '')
			{
				document.getElementById('id_jieshi').style.display = 'none';
			}
			else
			{
				document.getElementById('id_jieshi').style.display = '';
			}
		}
function p()
{

document.getElementById('id_ans1').className = 'p1';
document.getElementById('id_ans2').className = 'p1';
document.getElementById('id_ans3').className = 'p1';
document.getElementById('id_ans4').className = 'p1';
document.getElementById('id_jieshi').style.display = 'none';
document.getElementById('id_xd').style.display = 'none';
if (numflag > 0){
numflag-=1;
load_data();

}
}
function n()
{
if (numflag < id_count-1)
{
document.getElementById('id_jieshi').style.display = 'none';
document.getElementById('id_xd').style.display = 'none';
document.getElementById('id_ans1').className = 'p1';
document.getElementById('id_ans2').className = 'p1';
document.getElementById('id_ans3').className = 'p1';
document.getElementById('id_ans4').className = 'p1';
numflag+=1;
load_data();
}
else
alert("已经是最后一题！");
}
function a(s_data)
{var l_str;
var ok_str;
if(s_data==1)
{l_str = 'A';
document.getElementById('id_ans1').className = 'pok';
document.getElementById('id_ans2').className = 'p1';
document.getElementById('id_ans3').className = 'p1';
document.getElementById('id_ans4').className = 'p1';
}else if(s_data==2){l_str = 'B';
document.getElementById('id_ans1').className = 'p1';
document.getElementById('id_ans2').className = 'pok';
document.getElementById('id_ans3').className = 'p1';
document.getElementById('id_ans4').className = 'p1';
}else if(s_data==3){l_str = 'C';
document.getElementById('id_ans1').className = 'p1';
document.getElementById('id_ans2').className = 'p1';
document.getElementById('id_ans3').className = 'pok';
document.getElementById('id_ans4').className = 'p1';
}else if(s_data==4){l_str = 'D';
document.getElementById('id_ans1').className = 'p1';
document.getElementById('id_ans2').className = 'p1';
document.getElementById('id_ans3').className = 'p1';
document.getElementById('id_ans4').className = 'pok';
}
if(list1[numflag][7]==1)
{ok_str = 'A';
document.getElementById('id_ans1').className = 'pz';
}else if(list1[numflag][7]==2){ok_str = 'B';
document.getElementById('id_ans2').className = 'pz';
}else if(list1[numflag][7]==3){ok_str = 'C';
document.getElementById('id_ans3').className = 'pz';
}else if(list1[numflag][7]==4){ok_str = 'D';
document.getElementById('id_ans4').className = 'pz';
}
list1[numflag][14] = '' + ok_str + '';
list1[numflag][13] = '' + l_str + '';
list1[numflag][12] = '' + s_data + '';
list1[numflag][11] = '1';

if (autoflag==1)
{if (list1[numflag][12]==list1[numflag][7]){n();}
else{addCookie('errstrwyc',list1[numflag][0],'100');
showans();}
}
else{showans();}
}
function showans()
{
var tf_str;
if (list1[numflag][11] == '1')
{
if (list1[numflag][12]==list1[numflag][7])
{


}
else
{document.getElementById('id_jieshi').style.display = '';
	

}
}
else{}
}
function configflag()
{autoflag = document.getElementById('id_config').value;}

function tonumans()
{var ishow = document.getElementById('numflag').value;
if(!isNaN(ishow)){ishow = ishow - 1;
if (ishow > 0 && ishow < id_count){
document.getElementById('id_xd').style.display = 'none';
document.getElementById('id_ans1').className = 'p1';
document.getElementById('id_ans2').className = 'p1';
document.getElementById('id_ans3').className = 'p1';
document.getElementById('id_ans4').className = 'p1';
document.getElementById('id_jieshi').style.display = 'none';
numflag = ishow;
load_data();


}
}
else{document.getElementById('numflag').value = '';
return false;}
}

function ans1()
{
if(wddaa == "" || wddaa == undefined || wddaa == null)
{wddaa = 'A';
document.getElementById('id_ans1').className = 'pdx';}
else
{
wddaa = "";
document.getElementById('id_ans1').className = 'p1';}
xs();
}

function ans2()
{
if(wddab == "" || wddab == undefined || wddab == null)
{wddab = 'B';
document.getElementById('id_ans2').className = 'pdx';}
else
{
wddab = "";
document.getElementById('id_ans2').className = 'p1';}
xs();
}

function ans3()
{
if(wddac == "" || wddac == undefined || wddac == null)
{wddac = 'C';
document.getElementById('id_ans3').className = 'pdx';}
else
{
wddac = "";
document.getElementById('id_ans3').className = 'p1';}
xs();
}

function ans4()
{
if(wddad == "" || wddad == undefined || wddad == null)
{
wddad = 'D';
document.getElementById('id_ans4').className = 'pdx';}
else
{
wddad = "";
document.getElementById('id_ans4').className = 'p1';}
xs();
}

function xs()
{
wdda=wddaa+wddab+wddac+wddad;
}

function ansOK()
{
if(wdda.length>1)  
dxa();
else
alert("本题为多选题，请至少选择两个选项以上！");
}

function dxa()
{
var ok_str;
if(list1[numflag][7]==12){ok_str = 'AB';
document.getElementById('id_ans1').className = 'pz';
document.getElementById('id_ans2').className = 'pz';
}else if(list1[numflag][7]==13){ok_str = 'AC';
document.getElementById('id_ans1').className = 'pz';
document.getElementById('id_ans3').className = 'pz';
}else if(list1[numflag][7]==14){ok_str = 'AD';
document.getElementById('id_ans1').className = 'pz';
document.getElementById('id_ans4').className = 'pz';
}else if(list1[numflag][7]==23){ok_str = 'BC';
document.getElementById('id_ans2').className = 'pz';
document.getElementById('id_ans3').className = 'pz';
}else if(list1[numflag][7]==24){ok_str = 'BD';
document.getElementById('id_ans2').className = 'pz';
document.getElementById('id_ans4').className = 'pz';
}else if(list1[numflag][7]==34){ok_str = 'CD';
document.getElementById('id_ans3').className = 'pz';
document.getElementById('id_ans4').className = 'pz';
}else if(list1[numflag][7]==123){ok_str = 'ABC';
document.getElementById('id_ans1').className = 'pz';
document.getElementById('id_ans2').className = 'pz';
document.getElementById('id_ans3').className = 'pz';
}else if(list1[numflag][7]==124){ok_str = 'ABD';
document.getElementById('id_ans1').className = 'pz';
document.getElementById('id_ans2').className = 'pz';
document.getElementById('id_ans4').className = 'pz';
}else if(list1[numflag][7]==134){ok_str = 'ACD';
document.getElementById('id_ans1').className = 'pz';
document.getElementById('id_ans3').className = 'pz';
document.getElementById('id_ans4').className = 'pz';
}else if(list1[numflag][7]==234){ok_str = 'BCD';
document.getElementById('id_ans2').className = 'pz';
document.getElementById('id_ans3').className = 'pz';
document.getElementById('id_ans4').className = 'pz';
}else if(list1[numflag][7]==1234){ok_str = 'ABCD';
document.getElementById('id_ans1').className = 'pz';
document.getElementById('id_ans2').className = 'pz';
document.getElementById('id_ans3').className = 'pz';
document.getElementById('id_ans4').className = 'pz';
}
list1[numflag][14] = '' + ok_str + '';
list1[numflag][13] = '' + wdda + '';
list1[numflag][12] = '' + wdda + '';
list1[numflag][11] = '1';
wddaa='';
wddab='';
wddac='';
wddad='';
wdda='';
if (autoflag==1)
{if (list1[numflag][13]==list1[numflag][14]){n();}
else{addCookie('errstrwyc',list1[numflag][0],'100');
showans();}
}
else{showans();}

}


/*错题写cookie*/		
		function addCookie(objName,objValue,objHours)
		{
			//添加cookie
			var cookie_value = getCookie(objName);
			var str = objName + "=" + escape(cookie_value) + "," + escape(objValue);
			var date = new Date();
			var ms = objHours*3600*1000;
			//alert(ms);
			date.setTime(date.getTime() + ms);
			str += "; expires=" + date.toGMTString()+ "; path=/";  
 

			document.cookie = str; 

			
		}
		function getCookie(objName)
		{
			//获取指定名称的cookie的值
			
			var arrStr = document.cookie.split("; ");
			for(var i = 0;i < arrStr.length;i ++)
			{
				var temp = arrStr[i].split("=");
				if(temp[0] == objName) return unescape(temp[1]);
			} 
		}
/*移除错题*/
		function delwrong()
		{
if (id_count == 0)
{
 alert('已经没有错题纪录，不可清除!');  
}
else
{
			var cookie_value = getCookie("errstrwyc");
			var tempstr = '0';
			//alert(list1[numflag][0]);
		
			var arrStr = cookie_value.split(",");
			//alert(arrStr);
			for(var i = 0;i < arrStr.length;i ++)
			{
				if(arrStr[i] != list1[numflag][0])
				{
					if(arrStr[i] != '0')
					{
						tempstr = tempstr + ',' + arrStr[i];
					}
				}
			} 
			var newstr=tempstr
			editCookie('errstrwyc',newstr,'100')
			}
		}
		function editCookie(objName,objValue,objHours)
		{
			//添加cookie
			var str = objName + "=" + escape(objValue);
			var date = new Date();
			var ms = objHours*3600*1000;
			//alert(ms);
			date.setTime(date.getTime() + ms);
                        str += "; expires=" + date.toGMTString()+ "; path=/";  
			
			document.cookie = str;
			list1.splice(numflag,1);
			//alert(list1);
			id_count-=1;
			if (id_count-1 <=0)
			{
				numflag = 0;
			}
			if (numflag <= id_count-1)
			{
				//numflag+=1;
			}
			else
			{
				numflag-=1;

			}
if (id_count == 0)
{
 alert('所有错题都已移除了!');  document.location.reload();
}
else
			load_data();

document.getElementById('id_ans1').className = 'p1';
document.getElementById('id_ans2').className = 'p1';
document.getElementById('id_ans3').className = 'p1';
document.getElementById('id_ans4').className = 'p1';
document.getElementById('id_jieshi').style.display = 'none';
document.getElementById('id_xd').style.display = 'none';
		}

function delCookie(name)
{
if (id_count == 0)
{
 alert('已经没有错题纪录，不可清除!');  
}
else
{
if (confirm("你确认要清除所有错题纪录？"))
{
var cookie_value = getCookie("errstrwyc");
var tempstr = '0';
var newstr=tempstr
editCookie('errstrwyc',newstr,'100')
document.location.reload();
}
}
} 
