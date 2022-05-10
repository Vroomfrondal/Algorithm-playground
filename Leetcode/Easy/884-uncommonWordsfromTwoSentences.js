var uncommonFromSentences = function (s1, s2) {
    const arr = []
    const string1 = s1.split(',')
    const string2 = s2.split(',')
    arr.push(string1, string2)

    for (let i = 0; i < arr.length; i++) {
        console.log('I: ' + arr[i])
    }
}

uncommonFromSentences('this apple is sweet', 'this apple is sour')
//uncommonFromSentences('apple apple', 'banana')
