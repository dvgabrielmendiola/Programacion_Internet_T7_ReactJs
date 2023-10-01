import Button from "./button";
import Styles from '../styles/pad.module.css'

export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Operator = '+' | '-' | '×' | '÷'

interface PadProps {
    onDigitButtonClick: (digit: Digit) => void
    onPointButtonClick: () => void
    onOperatorButtonClick: (operator: Operator) => void
    onChangeSignButtonClick: () => void
    onEqualButtonClick: () => void
    onAllClearButtonClick: () => void
    onClearEntryButtonClick: () => void
}

export default function Pad({
    onDigitButtonClick,
    onPointButtonClick,
    onOperatorButtonClick,
    onChangeSignButtonClick,
    onEqualButtonClick,
    onAllClearButtonClick,
    onClearEntryButtonClick,
}: PadProps) {
    return (
        <div className={Styles.pad}>
            <Button
                description="Resetar Valores"
                onClick={onAllClearButtonClick}
                color="ac"
            >
                AC
            </Button>
            <Button
                description="Limpar Display"
                onClick={onClearEntryButtonClick}
                color="operator"
            >
                C
            </Button>
            <Button
                description="Inverter Sinal"
                onClick={onChangeSignButtonClick}
                color="operator"
            >
                -/+
            </Button>
            <Button
                onClick={() => onOperatorButtonClick('÷')}
                color="operator"
            >
                ÷
            </Button>
            <Button onClick={() => onDigitButtonClick(7)}>7</Button>
            <Button onClick={() => onDigitButtonClick(8)}>8</Button>
            <Button onClick={() => onDigitButtonClick(9)}>9</Button>
            <Button
                onClick={() =>
                    onOperatorButtonClick('×')}
                color="operator"
            >
                ×
            </Button>
            <Button onClick={() => onDigitButtonClick(4)}>4</Button>
            <Button onClick={() => onDigitButtonClick(5)}>5</Button>
            <Button onClick={() => onDigitButtonClick(6)}>6</Button>
            <Button
                onClick={() =>
                    onOperatorButtonClick('-')}
                color="operator"
            >
                -
            </Button>
            <Button onClick={() => onDigitButtonClick(1)}>1</Button>
            <Button onClick={() => onDigitButtonClick(2)}>2</Button>
            <Button onClick={() => onDigitButtonClick(3)}>3</Button>
            <Button
                onClick={() =>
                    onOperatorButtonClick('+')}
                color="operator"
            >
                +
            </Button>
            <Button onClick={() => onDigitButtonClick(0)}>0</Button>
            <Button onClick={onPointButtonClick}>.</Button>
            <Button
                onClick={onEqualButtonClick}
                color="equal"
                isLarge={true}
            >
                =
            </Button>
        </div>
    )
}
