import Styles from '../styles/display.module.css'

interface DisplayProps {
    value: string
    expression: string
}

export default function Display({ value, expression }: DisplayProps) {
    return (
        <div className={Styles.display} >
            <div className={Styles.indicatorList}>
                <div className={Styles.expression}>{expression}</div>
            </div>
            <div className={Styles.Screen}>{value}</div>
        </div>
    )
}
