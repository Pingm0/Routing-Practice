function CWord (props) {
    const {word,fColor,bColor} = props;
    if (isNaN (word)){
    return (
        <h1 style={{ color: fColor, backgroundColor: bColor }}>
            The Word is: {word}
        </h1>
    )
}else {
    return (
        <h1>This is not a Word</h1>
    )
}
}

export default CWord;