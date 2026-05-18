import Status from "../../components/Dashborad/Status/Status";
function StatusPage() {
  const cards = [
    { icon: "fa-users", title: "Users", counter: 120 },
    { icon: "fa-building", title: "Projects", counter: 30 },
    { icon: "fa-code", title: "Developers", counter: 50 },
    { icon: "fa-message", title: "Messages", counter: 15 },
  ];

  return (
    <section className="py-4">
      <div className="container">
        <div className="row">
          {cards.map((card, index) => (
            <Status
              key={index}
              icon={card.icon}
              title={card.title}
              counter={card.counter}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatusPage;
