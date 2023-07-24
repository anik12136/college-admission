
const Event = ({ev}) => {
    return (
        <div className="mb-3">
            <h2>Name:{ev.event_name}</h2>
            <p>Date:{ev.event_date}</p>
            <p>Description:{ev.event_description}</p>
        </div>
    );
};

export default Event;