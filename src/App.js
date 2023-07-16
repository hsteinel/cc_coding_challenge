import "./App.css";
import logo from "./assets/logo-cc.svg";
import ExpensesListComponent from "./compontents/expenses-list/expenses-list.component";
import Stack from "@mui/material/Stack";

function App() {
    return (
        <main>
            <Stack className="content" direction="column">
                <Stack direction="row" gap="32px">
                    <img src={logo} width="100px" alt="cinema calc logo"/>
                    <div className="column">
                        <h2>Coding Task</h2>
                        <h3>Hannes Steinel</h3>
                    </div>
                </Stack>
                <ExpensesListComponent/>
            </Stack>

        </main>
    );
}

export default App;
