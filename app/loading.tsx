import styles from './page.module.css'
const { container, main } = styles

export default function Loading() {
    return (
        <div className={container}>
            <main className={main}>
                <svg className="fill-black, stroke-black dark:fill-white dark:stroke-white" version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" width="150" height="150" enableBackground="new 0 0 100 100" xmlSpace="preserve">
                    <circle fill="none" strokeWidth="6" strokeMiterlimit="15" strokeDasharray="14.2472,14.2472" cx="50" cy="50" r="47">
                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                    </circle>
                    <circle fill="none" strokeWidth="1" strokeMiterlimit="10" strokeDasharray="10,10" cx="50" cy="50" r="39">
                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="5s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>
                    </circle>
                    <g>
                        <rect x="30" y="35" width="5" height="30">
                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.1"></animateTransform>
                        </rect>
                        <rect x="40" y="35" width="5" height="30">
                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.2"></animateTransform>
                        </rect>
                        <rect x="50" y="35" width="5" height="30">
                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3"></animateTransform>
                        </rect>
                        <rect x="60" y="35" width="5" height="30">
                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.4"></animateTransform>
                        </rect>
                        <rect x="70" y="35" width="5" height="30">
                            <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.5"></animateTransform>
                        </rect>
                    </g>
                </svg>
            </main>
        </div>
    )
}