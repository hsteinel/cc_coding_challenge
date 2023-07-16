import GlassCard from "../elements/glass-card";
import AddButton from "../elements/add-button";
import useStore from "../../stores/expenses-store";
import ExpensesItem from "./expenses-item.component";
import "./expenses-list.component.css"
import TotalPrice from "../elements/total-price";
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

function ExpensesList() {
    const [costs, createCost, updateCost, removeCost, reorderCosts] = useStore((state) => [state.costs, state.createCost, state.updateCost, state.removeCost, state.reorderCosts])

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        reorderCosts(
            result.source.index,
            result.destination.index
        );
    }

    return (
        <>
            <GlassCard>
                <AddButton onClick={createCost}>Add Expenses</AddButton>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, _) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {costs.map((cost, index) => (
                                    <ExpensesItem
                                        key={cost.id}
                                        index={index}
                                        cost={cost}
                                        onUpdate={updateCost}
                                        onRemove={removeCost}
                                    />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </GlassCard>
            <TotalPrice costs={costs}/>
        </>
    )
}

export default ExpensesList;