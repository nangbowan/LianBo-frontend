let components = ['background', 'hat', 'hair', 'clothes', 'accessories']
let identities = ['web3', 'carbon', 'antchain']
weightArr = [0, 0, 0, 2, 2]

function getMaxCountsType(arr) {
    const getWordCnt = (arr) => {
        let obj = {};
        for (let i = 0, l = arr.length; i < l; i++) {
            let item = arr[i];
            obj[item] = (obj[item] + 1) || 1;
        }
        console.log('objs', obj)
        return obj;
    }

    const getIndexMax = (arr) => {
        const maxNum = Math.max(...arr)
        const maxIndex = arr.indexOf(maxNum)
        console.log('maxIndex', maxIndex)
        return [maxIndex, maxNum]
    }

    let obj = getWordCnt(arr)
    let [maxIndex, maxNum] = getIndexMax(Object.values(obj))

    return {
        ds: identities[Object.keys(obj)[maxIndex]],
        number: maxNum
    }
}

console.log(
    getMaxCountsType(weightArr)
)

/*
const fs = require("fs");

var m = new Map();
for(i=0;i<=242;i++){
    const filepath = (`./json/${i}.json`).toString()
    let jsonfile = JSON.parse(fs.readFileSync(filepath));
    jsonfile.ambassadorUrl = `https://lainbo-1310868664.cos.ap-nanjing.myqcloud.com/images/${i}.png`;
    // console.log(jsonfile.ambassadorUrl)
    let str = JSON.stringify(jsonfile)
    fs.writeFileSync(filepath,str,'utf8',(err)=>{
        if(err){
            throw err;
        }
        console.log("JSON file has been saved.");
    })
}*/
