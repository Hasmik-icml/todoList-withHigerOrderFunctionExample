
import "./border.css"


function addBorder(Component, color="red"){
    return function addedBorder(props){
        return (
            <div className={`border ${color}`}>
            <Component {...props}/>
            </div>
        )
    }
}
export default addBorder;

