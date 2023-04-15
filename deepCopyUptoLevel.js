const originMap = {
    name: 'Nitin',
    salary: {
        monthly: 10,
        yearly: 120,
        taxes: {
            monthly: 20
        },
    },
    gender: 'male',
};

const cloneObject = ({ originMap, clonedMap, level, currentLevel }) => {
    currentLevel++;
    const totalKeys = Object.keys(originMap);
    if (!totalKeys.length) {
        return;
    }
    totalKeys.forEach((key) => {
        if (currentLevel >= level) {
            clonedMap[key] = originMap[key];
            return;
        }
        if (typeof key === 'object') {
            clonedMap[key] = {};
            cloneObject({ originMap: originMap[key], clonedMap: clonedMap[key] })
            return;
        }
        clonedMap[key] = JSON.parse(JSON.stringify(originMap[key]));
    })
}
const clonedMap = {};
let level = 2, currentLevel = 0;
cloneObject({ originMap, clonedMap, level, currentLevel });
console.log(clonedMap);
