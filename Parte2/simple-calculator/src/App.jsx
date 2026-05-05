import { useState } from 'react';
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel';
import './App.css';

function App() {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'AC') {
            setInput('');
        } else if (value === '=') {
            try {
            setInput(eval(input).toString());
            } catch (error) {
            setInput('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <Display value={input} />
            <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
    );
}

export default App;