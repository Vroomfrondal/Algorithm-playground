var numberOfSubstrings = function (s) {
    let countA = 0
    let countB = 0
    let countC = 0
    const arr = s.split("")

    for (i = 0; i < arr.length; i++) {
        const curr = arr[i]
        if (curr === "a") {
            countA++
        } else if (curr === "b") {
            countB++
        } else if (curr === "c") {
            countC++
        }
    }
    console.log(`A: ${countA}, B: ${countB}, C: ${countC}`)
}

numberOfSubstrings("abcabc")
numberOfSubstrings("aaacb")
numberOfSubstrings("abc")
numberOfSubstrings("abbcaacbacbabcabcabaaaabcabc")
