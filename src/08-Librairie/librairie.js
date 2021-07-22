//Encapsulation
let parametre = 'mon parametre';
var lib = (
    function (parametre){
        var tab =[];
        let maLib = {};
        maLib.add=function(val){
            tab.push(val);
        }
        maLib.getTab = ()=>{
            console.log(parametre);
            return tab;
        }
        return maLib;
    }
)("parametre");

lib.add('test');
console.log(lib.getTab());
