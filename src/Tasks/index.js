import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
      <ul className="section__list">
           {tasks.map(task => (
            <li 
              key={task.id} className={`section__listItem${
                hideDone && task.done 
                  ? " section__listItem--hiden" 
                  : ""}`}
            >
              <button className="section__button">
                {task.done ? "✔" : ""}
              </button>
              <span className={
                task.done ? "section__listItem--done" : ""
              }>
                {task.content}
              </span>
              <button className="section__button section__buttonRemove">
                🗑
              </button>  
            </li>
            ))}
      </ul>
);

export default Tasks;