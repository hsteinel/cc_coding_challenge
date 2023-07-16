import './expenses-item.component.css'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import Stack from '@mui/material/Stack';
import {DragHandle} from "@mui/icons-material";
import {Draggable} from 'react-beautiful-dnd';


function ExpensesItem({cost, index, onUpdate, onRemove}) {
    return (
        <Draggable key={cost.id} draggableId={cost.id} index={index}>
            {(provided, snapshot) => {
                if (snapshot.isDragging) {
                    provided.draggableProps.style.left = provided.draggableProps.style.offsetLeft;
                    provided.draggableProps.style.top = provided.draggableProps.style.offsetTop;
                }
                return (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                    >
                        <Stack className="item" direction="row" spacing={2} alignItems="center"
                               justifyContent="space-evenly">
                            <p className="id">{cost.id}</p>
                            <div {...provided.dragHandleProps} draggable={true}><DragHandle/></div>
                            <input className="name-tf" type="text" placeholder="Name"
                                   onChange={(e) => {
                                       cost.name = e.target.value;
                                       onUpdate(cost);
                                   }}></input>
                            <div className="suffix euro">
                                <input
                                    value={cost.price}
                                    className="num"
                                    type="number"
                                    placeholder="Price"
                                    pattern="[0-9]+([\.,][0-9]+)?"
                                    onChange={(e) => {
                                        cost.price = e.target.value;
                                        onUpdate(cost);
                                    }}
                                />
                            </div>
                            <div className="suffix percent">
                                <input
                                    value={cost.markup}
                                    className="num"
                                    type="number"
                                    pattern="[0-9]+([\.,][0-9]+)?"
                                    placeholder="Markup"
                                    onChange={(e) => {
                                        cost.markup = e.target.value;
                                        onUpdate(cost);
                                    }}
                                />
                            </div>
                            <p className="total">{cost.calcTotalPrice().toFixed(2)}€</p>
                            <IconButton className="icon-button" color="error"
                                        onClick={() => onRemove(cost.id)}><DeleteIcon/></IconButton>
                        </Stack>
                    </div>
                )
            }}
        </Draggable>
    )
}

export default ExpensesItem;