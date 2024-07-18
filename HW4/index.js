var testObject = {
    1: ["test1", "test2", "test3"],
    2: ['test1']
};
function checkKey(obj) {
    for (var key in obj) {
        if (typeof obj[key] !== 'number') {
            return 'Not number!';
        }
    }
    return 'All are numbers!';
}
