
var that = this;

function main(map){
    function test(a,b,c){
        print(a+b+c)
    }
    that.test = test;
}
function print(thing){
    console.log(that.test('a','b','c'));
}

main(null);
