// https://leetcode.com/problems/rings-and-rods/description/

function countPoints(rings: string): number {
    let answer = 0
    const input = Array.from(rings)
    const rods: any = [
        { 0: [] },
        { 1: [] },
        { 2: [] },
        { 3: [] },
        { 4: [] },
        { 5: [] },
        { 6: [] },
        { 7: [] },
        { 8: [] },
        { 9: [] },
    ]

    let currColor = ''
    input.map((character, index) => {
        if (index % 2 === 0) {
            // on color character
            currColor = character
        } else {
            // when on location character
            rods[character][character].push(currColor)
        }
    })

    rods.map((rod: any, index: number) => {
        const ringsOnRod = rod[index]

        if (ringsOnRod.includes('R') && ringsOnRod.includes('G') && ringsOnRod.includes('B')) {
            answer++
        }
    })

    return answer
}

countPoints('B0B6G0R6R0R6G9')
countPoints('G4')
