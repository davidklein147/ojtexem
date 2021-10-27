const Progressbar = (props) => {


    return (
        <div class="progress" style = {{height : "40px"}}>
            <div className="progress-bar" role="progressbar" style={{width: `${props.progWidth}%`}} >{props.progWidth}%</div>
        </div>
    )
}
export default Progressbar;