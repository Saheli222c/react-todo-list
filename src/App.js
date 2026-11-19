
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';

function App() {
    let todos = [
        {
            sno: 1,
            title: "Go to Market",
            desc: "Buy fruits and vegetables"
        },
        {
            sno: 2,
            title: "A React",
            desc: "Practice React components"
        },
        {
            sno: 3,
            title: "Exercise",
            desc: "Go for a 30 minute walk"
        }
    ];

    return (
        <>
            <Header title="My Todos List" />
            <Todos todos={todos} />
            <Footer />
        </>
    );
}

export default App;
