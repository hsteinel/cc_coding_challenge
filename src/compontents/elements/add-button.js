import "./add-button.css"

function AddButton({children, onClick}) {
    return (
        <button className="add-button" onClick={onClick}>
            {children}
        </button>
    )
}

export default AddButton;