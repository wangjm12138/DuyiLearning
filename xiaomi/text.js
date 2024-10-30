function delay1() {
    return new Promise(resolve => setTimeout(resolve(2), 1000));
}

//这样返回的是settimout的id而不是promise对象
// async function delay() {
//     var p  = await setTimeout(()=>{console.log("hello")}, 1000);
//     console.log(p);
// }
//必须得这么用
async function delay() {
    var p  = await delay1();
    return p;
}
var p = delay();
console.log(p);

setTimeout(() => {
    console.log(p);
}, 1000);
