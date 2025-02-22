function multiline(text: string) {
    return text.replace(/\r\n\s*/g, ' ')
}

export default {
    multiline: multiline,
}