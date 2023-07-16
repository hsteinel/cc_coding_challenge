import {create} from 'zustand'
import {Cost} from "../models/cost";

const useStore = create((set) => ({
    costs: [],
    createCost: () => set(function (state) {
        state.costs.push(new Cost(calcNextId(state.costs), "", "", "0"));
        return {costs: state.costs}
    }),
    updateCost: (newCost) => set(function (state) {
        let preCostIndex = state.costs.findIndex(c => c.id === newCost.id);
        state.costs[preCostIndex] = newCost;
        return {costs: state.costs}
    }),
    removeCost: (idToRemove) => set(function (state) {
        let newExpenses = state.costs.filter(function (e) {
            return e.id !== idToRemove;
        })
        return {costs: newExpenses}
    }),
    reorderCosts: (prevIndex, newIndex) => set(function (state) {
        const result = Array.from(state.costs);
        const [removed] = result.splice(prevIndex, 1);
        result.splice(newIndex, 0, removed);

        return {costs: result};
    }),
}))

export default useStore;

function calcNextId(costs) {
    if (costs.length === 0) return "1";
    return (Math.max(...costs.map(c => c.id)) + 1) + ""
}