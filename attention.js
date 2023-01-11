var func = " ";

function ascend (find){
    for (var i = find.length - 1; i>= 0; i--){
        func += find[i];
    }
    return func;
}
console.log(ascend ("future"));