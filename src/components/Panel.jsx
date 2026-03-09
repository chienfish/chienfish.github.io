export default function Panel({ children }) {
  return (
    <section className="panel">
      <div className="panel-inner">{children}</div>
    </section>
  );
}