const SingleDetail = (props) => {


    return (
        <div className="single-container">
            <div className="single-header-text-box">
                <span className="single-header-headline">{props.space.name} <span className="single-header-headline-break">\</span> {props.space.type}</span>
                
                { props.space.workstyle === props.user.workstyle ? 
                <span className="single-header-workstyle">This work space is recommended for you: <span className="single-header-workstyle-type">{props.user.workstyle}</span></span>
                :
                <span className="single-header-workstyle">This work space is ideal for: <span className="single-header-workstyle-type">{props.space.workstyle}</span></span>    
                }
                
                
                <div className="single-reservations-header">
                    
                    <span className="single-header-capacity">{props.space.capacity}
                        { props.space.capacity === "1" ?
                        <span className="single-header-seats"> seat</span>
                        :
                        <span className="single-header-seats"> seats</span>}
                    </span>
                    <span className="single-header-space-description">{props.space.description}</span>
                        <form className="single-reservations-form" onSubmit={props.handleReserve}> 
                            <label htmlFor="date">Reserve this space: </label>
                            <input type="date" id="date" onChange={(e) => {props.setDate(e.target.value)}}/>
                            <input className="input-button" type="submit" value="RESERVE" />
                        </form>
                    
                </div>
            </div>
            <div className="single-header-overlay"></div>
            <img className="single-header-background" alt="work-tools" src={props.space.image} /> 
        </div>
    )
}


export default SingleDetail