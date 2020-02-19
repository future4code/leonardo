function firstRecorrentWord(word: string): string | null {
    let hash: any = {}
    let char:string = ''
    for (let i = 0; i < word.length; i++) {
        char = word[i]
        if (hash[char] === 1) {
            return char
        } else {
            hash[char] = 1
        }
    }
    return null
}