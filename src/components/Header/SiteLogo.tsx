import styles from "./SiteLogo.module.css";

export default function HexagonLogo() {
  return (
    <div className="text-lg">
      <svg
        width={50}
        height={50}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hexagon Path */}
        <path
          d="M50 5 
             L87 25 
             L87 75 
             L50 95 
             L13 75 
             L13 25 
             L50 5 Z"  
          className={styles.hexagon}
        />
        {/* Letter "A" */}
        <text
          x="50%"
          y="55%"
          textAnchor="middle"
          dominantBaseline="middle"
          className={styles.letter}
        >
          A
        </text>
      </svg>
    </div>
  );
}