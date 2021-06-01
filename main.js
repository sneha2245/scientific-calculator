//time
var flag = true;

function setTime() {
	var date = new Date();
	var day;
	if (date.getHours() === 12) {
		day = date.getHours();
	} else {
		day = date.getHours() % 12;
	}
	document.getElementById('hh').innerHTML = pad(day, 2);
	document.getElementById('mm').innerHTML = pad(date.getMinutes(), 2);
	document.getElementById('ss').innerHTML = pad(date.getSeconds(), 2);
	if (date.getHours() >= 12) {
		document.getElementById('ltr').innerHTML = 'PM';
	} else {
		document.getElementById('ltr').innerHTML = 'AM';
	}
	setTimeout(setTime, 1000);
	flag = !flag;
	if (flag) {
		document.getElementById('colon1').classList.add('hide');
		document.getElementById('colon2').classList.add('hide');
	} else {
		document.getElementById('colon1').classList.remove('hide');
		document.getElementById('colon2').classList.remove('hide');
	}
}

function pad(num, size) {
	var s = num + "";
	while (s.length < size) s = "0" + s;
	return s;
}

function setDate() {
	var date = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	document.getElementById('DD').innerHTML = date.getDate();
	document.getElementById('MM').innerHTML = months[date.getMonth()];
	document.getElementById('YY').innerHTML = date.getFullYear();
	document.getElementById('day').innerHTML = days[date.getDay()];
}
//calculator      
function inv() {
	document.getElementById('invStat').checked = !document.getElementById('invStat').checked;
	if (document.getElementById('invStat').checked) {
		document.getElementById('inv').style.backgroundColor = "#fff8a2";
		document.getElementById('ex').innerHTML = "e" + "<sup>x</sup>";
		document.getElementById('frac').innerHTML = "Frac";
		document.getElementById('sinh').innerHTML = "sinh" + "<sup>-1</sup>";
		document.getElementById('sin').innerHTML = "sin" + "<sup>-1</sup>";
		document.getElementById('cosh').innerHTML = "cosh" + "<sup>-1</sup>";
		document.getElementById('cos').innerHTML = "cos" + "<sup>-1</sup>";
		document.getElementById('pi').innerHTML = "2π";
		document.getElementById('tanh').innerHTML = "tanh" + "<sup>-1</sup>";
		document.getElementById('tan').innerHTML = "tan" + "<sup>-1</sup>";
	} else {
		document.getElementById('inv').style.backgroundColor = "#cccccc";
		document.getElementById('ex').innerHTML = "ln";
		document.getElementById('frac').innerHTML = "Int";
		document.getElementById('sinh').innerHTML = "sinh";
		document.getElementById('sin').innerHTML = "sin";
		document.getElementById('cosh').innerHTML = "cosh";
		document.getElementById('cos').innerHTML = "cos";
		document.getElementById('pi').innerHTML = "π";
		document.getElementById('tanh').innerHTML = "tanh";
		document.getElementById('tan').innerHTML = "tan";
	}
}

function pressFristBac() {
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "(";
}

function pressSecondBac() {
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + ")";
}

function pressLn() {
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = Math.exp(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "e" + "^(" + document.getElementById('sdisplay').value + ")";
	} else {
		document.getElementById('bdisplay').value = Math.log(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "ln(" + document.getElementById('sdisplay').value + ")";
	}
}

function pressRoot() {
	document.getElementById('bdisplay').value = Math.sqrt(document.getElementById('sdisplay').value);
	document.getElementById('sdisplay').value = "√(" + document.getElementById('sdisplay').value + ")";
}

function pressAddOrSub() {
	document.getElementById('sdisplay').value = "-" + document.getElementById('sdisplay').value;
}

function pressInt() {
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = document.getElementById('sdisplay').value - Math.floor(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "frac(" + document.getElementById('sdisplay').value + ")";
	} else {
		document.getElementById('bdisplay').value = Math.floor(document.getElementById('sdisplay').value);
	}
}

function pressSinh() {
	reAssign();
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = Math.asinh(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "asinh(" + document.getElementById('sdisplay').value + ")";
	} else {
		document.getElementById('bdisplay').value = Math.sinh(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "sinh(" + document.getElementById('sdisplay').value + ")";
	}
}

function pressSin() {
	reAssign();
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = Math.asin(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "asin(" + document.getElementById('sdisplay').value + ")";
	} else {
		document.getElementById('bdisplay').value = Math.sin(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "sin(" + document.getElementById('sdisplay').value + ")";
	}
}

function pressX2() {
	document.getElementById('bdisplay').value = Math.pow(document.getElementById('sdisplay').value, 2);
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "^2";
}

function prsessNFactorial() {
	var i, no, fact;
	fact = 1;
	no = Number(document.getElementById('sdisplay').value);
	for (i = 1; i <= no; i++) {
		fact = fact * i;
	}
	document.getElementById('bdisplay').value = fact;
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "!";
}

function pressPer() {
	reAssign();
	document.getElementById('bdisplay').value = document.getElementById('sdisplay').value / 100;
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "%";
}

function pressRoothalf() {
	document.getElementById('bdisplay').value = Math.SQRT1_2;
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "√(1/2)";
}

function pressCoshInv() {
	reAssign();
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = Math.acosh(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "acosh(" + document.getElementById('sdisplay').value + ")";
	} else {
		document.getElementById('bdisplay').value = Math.cosh(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "cosh(" + document.getElementById('sdisplay').value + ")";
	}
}

function pressCosInv() {
	reAssign();
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = Math.acos(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "acos(" + document.getElementById('sdisplay').value + ")";
	} else {
		document.getElementById('bdisplay').value = Math.cos(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "cos(" + document.getElementById('sdisplay').value + ")";
	}
}

function press1ByX() {
	document.getElementById('bdisplay').value = (1 / document.getElementById('sdisplay').value);
	document.getElementById('sdisplay').value = "reciproc(" + document.getElementById('sdisplay').value + ")";
}

function pressPie() {
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = 2 * Math.PI;
		document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "2π";
	} else {
		document.getElementById('bdisplay').value = Math.PI;
		document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "π";
	}
}

function pressTanhInv() {
	reAssign();
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = Math.atanh(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "atanh(" + document.getElementById('sdisplay').value + ")";
	} else {
		document.getElementById('bdisplay').value = Math.tanh(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "tanh(" + document.getElementById('sdisplay').value + ")";
	}
}

function pressTanInv() {
	reAssign();
	if (document.getElementById('invStat').checked) {
		document.getElementById('bdisplay').value = Math.atan(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "atan(" + document.getElementById('sdisplay').value + ")";
	} else {
		document.getElementById('bdisplay').value = Math.tan(document.getElementById('sdisplay').value);
		document.getElementById('sdisplay').value = "tan(" + document.getElementById('sdisplay').value + ")";
	}
}

function pressXPOwer3() {
	document.getElementById('bdisplay').value = Math.pow(document.getElementById('sdisplay').value, 3);
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "^3";
}

function press3RootX() {
	document.getElementById('bdisplay').value = Math.cbrt(document.getElementById('sdisplay').value);
	document.getElementById('sdisplay').value = "cuberoot(" + document.getElementById('sdisplay').value + ")";
}

function pressRoot2() {
	document.getElementById('bdisplay').value = Math.SQRT2;
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "√2";
}

function pressMod() {
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "Mod";
}

function pressLog() {
	reAssign();
	document.getElementById('bdisplay').value = Math.log10(document.getElementById('sdisplay').value);
	document.getElementById('sdisplay').value = "log(" + document.getElementById('sdisplay').value + ")";
}

function pressTenPoewrX() {
	document.getElementById('bdisplay').value = Math.pow(10, document.getElementById('sdisplay').value);
	document.getElementById('sdisplay').value = "10^" + document.getElementById('sdisplay').value;
}

function pressDot() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + ".";
}

function pressBack() {
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value.toString().substring(0, document.getElementById('sdisplay').value.toString().length - 1);
}

function pressCe() {
	document.getElementById('bdisplay').value = "";
}

function pressC() {
	document.getElementById('sdisplay').value = "";
	document.getElementById('bdisplay').value = "";
}
//double var 
function pressXY() {
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "^";
}

function pressYRootX() {
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + " yroot ";
}

function pressExp() {
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + ".e+";
}

function press0() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "0";
}

function press1() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "1";
}

function press2() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "2";
}

function press3() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "3";
}

function press4() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "4";
}

function press5() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "5";
}

function press6() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "6";
}

function press7() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "7";
}

function press8() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "8";
}

function press9() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "9";
}
//calculation
function pressEqu() {
	var expr = document.getElementById('sdisplay').value.toString();
	var arr;
	if (expr.indexOf("^") !== -1) {
		arr = expr.split("^");
		document.getElementById('bdisplay').value = evaluate(arr, "^");
	} else
	if (expr.indexOf("yroot") !== -1) {
		arr = expr.split("yroot");
		document.getElementById('bdisplay').value = evaluate(arr, "yroot");
	} else
	if (expr.indexOf("Mod") !== -1) {
		arr = expr.split("Mod");
		document.getElementById('bdisplay').value = evaluate(arr, "Mod");
	} else
	if (expr.indexOf(".e+") !== -1) {
		arr = expr.split(".e+");
		document.getElementById('bdisplay').value = evaluate(arr, ".e+");
	} else
	if (expr.indexOf("+") !== -1) {
		arr = expr.split("+");
		document.getElementById('bdisplay').value = evaluate(arr, "+");
	} else
	if (expr.indexOf("-") !== -1) {
		arr = expr.split("-");
		document.getElementById('bdisplay').value = evaluate(arr, "-");
	} else
	if (expr.indexOf("*") !== -1) {
		arr = expr.split("*");
		document.getElementById('bdisplay').value = evaluate(arr, "*");
	} else
	if (expr.indexOf("/") !== -1) {
		arr = expr.split("/");
		document.getElementById('bdisplay').value = evaluate(arr, "/");
	}
}

function evaluate(arr, ops) {
	var temp = 1,
		flag = 1;
	for (var i = 0; i < arr.length; i++) {
		if (ops == "^") {
			if (flag === 1) {
				temp = arr[i];
				flag = 2;
			} else {
				temp = Math.pow(temp, arr[i]);
			}
		} else if (ops == "yroot") {
			if (flag === 1) {
				temp = arr[i];
				flag = 2;
			} else {
				temp = Math.pow(temp, 1 / arr[i]);
			}
		} else if (ops == "+") {
			if (flag === 1) {
				temp = parseInt(arr[i]);
				flag = 2;
			} else {
				temp = temp + parseInt(arr[i]);
			}
		} else if (ops == "-") {
			if (flag === 1) {
				temp = arr[i];
				flag = 2;
			} else {
				temp = temp - arr[i];
			}
		} else if (ops == "*") {
			if (flag === 1) {
				temp = arr[i];
				flag = 2;
			} else {
				temp = temp * arr[i];
			}
		} else if (ops == "/") {
			if (flag === 1) {
				temp = arr[i];
				flag = 2;
			} else {
				temp = temp / arr[i];
			}
		} else if (ops == "Mod") {
			if (flag === 1) {
				temp = arr[i];
				flag = 2;
			} else {
				temp = temp % arr[i];
			}
		} else if (ops === ".e+") {
			if (flag === 1) {
				temp = arr[i];
				flag = 2;
			} else {
				return temp * Math.pow(10, arr[i]);
			}
		}
	}
	return temp;
}

function reAssign() {
	if (document.getElementById('bdisplay').value !== "") {
		document.getElementById('sdisplay').value = document.getElementById('bdisplay').value;
		document.getElementById('bdisplay').value = "";
	}
}

function pressAdd() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "+";
}

function pressSub() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "-";
}

function pressMul() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "*";
}

function pressDiv() {
	reAssign();
	document.getElementById('sdisplay').value = document.getElementById('sdisplay').value + "/";
}
