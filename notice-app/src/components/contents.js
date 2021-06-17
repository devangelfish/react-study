const style = {
    contents: {
        height: '100vh',
        marginRight: '-300px',
        float: 'right',
        width: '100%',
        backgroundColor: '#FFC800'
    }
}

const contents = ({contents}) =>
<div id="contents" style={style.contents}>
    {contents}
</div>

export default contents