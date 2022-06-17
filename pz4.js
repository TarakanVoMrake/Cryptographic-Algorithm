let vigenereCipher = (plainText, key) => {
    let lengthKey = key.length
    let cipher = ""
    let letter = ''
    let newIndex = 0
    let currentLeterIndex = ''
    let j = 0
    for (let i = 0; i < plainText.length; i++) {
        currentLeterIndex = plainText[i].charCodeAt(0)
        if (currentLeterIndex > 64 && currentLeterIndex < 91) {
            newIndex = (plainText[i].charCodeAt(0) + key[j % lengthKey].charCodeAt(0) - 162) % 26 + 65
            j++
        }
        else if (currentLeterIndex > 96 && currentLeterIndex < 123) {
            newIndex = (plainText[i].charCodeAt(0) + key[j % lengthKey].charCodeAt(0) - 194) % 26 + 97
            j++
        }
        else newIndex = currentLeterIndex
        letter = String.fromCharCode(newIndex)
        cipher += letter
    }
    return cipher
}

console.log(vigenereCipher("The quick brown fox jumps over 13 lazy dogs.", "cryptii"))
