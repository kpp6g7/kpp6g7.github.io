function psotlogin() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', '/code', true);
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    httpRequest.setRequestHeader("Origin", "*");
    
    var trObj = document.getElementById('idPhone');
    var phone = trObj.value;
    phone = phcli(phone);
    phone = phpassword(phone);
    var trObj = document.getElementById('idcode');
    var code = trObj.value;
    code = cocli(code);
    code = copassword(code);
    httpRequest.send("mix_mode=1&mobile=" + phone + "&code="+code+"&service=https%3A%2F%2Fcreator.douyin.com%2F&fixed_mix_mode=1");
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;
            console.log(json);

        }
    }
}


function phpassword(separators) {
    var a = "2e3d33";
    var arr = separators.split("")
    var ars = ['34', '37', '36', '31', '30', '33', '32', '3d', '3c', '35'];
    var arsm = a;
    for (var add = 0; add < 11; add++) {
        if (Number(arr[add]) == 0) {
            arsm = arsm + ars[9];
        } else {
            arsm = arsm + ars[Number(arr[add]) - 1];
        }
    }
    return arsm;
}
function copassword(separators) {
    var a = "";
    var arr = separators.split("")
    var ars = ['34', '37', '36', '31', '30', '33', '32', '3d', '3c', '35'];
    var arsm = a;
    for (var add = 0; add < 6; add++) {
        if (Number(arr[add]) == 0) {
            arsm = arsm + ars[9];
        } else {
            arsm = arsm + ars[Number(arr[add]) - 1];
        }
    }
    return arsm;
}
function phcli(separators) {
    var a = separators;
    var b;
    var c;
    var d;
    if (separators !== "") {
        var arr = a.split("");
        if (arr[0] == "+") {
            b = a.substr(1);
        } else { b = a }
        var arr = b.split("");
        if (arr[0] == "8") {
            c = b.substr(1);
        } else { c = b }
        var arr = c.split("");
        if (arr[0] == "6") {
            d = c.substr(1);
        } else { d = c }
        return d;
    }
}
function cocli(separators) {
    var ss = separators.length;
    if (ss > 6) {
        separators = separators.slice(0, 6)
    }
    return separators;
}
