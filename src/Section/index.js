import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <div className="section__headerDiv">
      <h2 className="section__header">{title}</h2>
      {extraHeaderContent}
    </div>
    <div className="section__div">{body}</div>
  </section>
);

export default Section;
