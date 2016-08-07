function arrayInput(array, event) {
    array.push({
        item: event,
        flag: true
    });
    return array;
}

function countArray(array) {
    const a = array.filter(a=>a.flag === true);
    return a.length;
}

function arrayDel(array,index) {
    array.splice(index,1);
    return array;
}
function changeArray(array,index) {
    const a = !array[index].flag;
    array[index].flag=a;
    return array;
}

