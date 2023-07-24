import Event from "./Event";
import Reacharch from "./Reacharch";

const CollegeCard = ({ item }) => {
    console.log(item);
    // console.log (item.events[0])
    return (
        <div className="card md:w-[400px] bg-base-100 shadow-xl">
            <figure><img className="h-80" src={item.college_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {item.college_name}
                   
                </h2>
                <h2 className="text-lime-500">Admission date: {item.admission_dates}</h2>
                <div className="card-actions">
                   <h2>Events : </h2>
                    <h2 className="mx-5">
                    {
                        item.events.map(ev => <Event
                        key= {ev._id}
                        ev={ev}
                        ></Event> )
                    }
                    </h2>
                </div>
                <div className="card-actions ">
                    <h2>Reacharch history:</h2>
                    <h2>
                    {
                        item.research_history.map(re => <Reacharch
                            key= {re._id}
                            re={re}
                        ></Reacharch>)
                    }

                    </h2>
                </div >

                <div className="card-actions ">
                    <h2>Sports:</h2>
                        <h2>
                            {
                                 item.sports_categories.map(sp => `${sp}. ` )
                            }
                        </h2>
                </div>
                <button className="btn btn-secondary">Show Details</button>
            </div>
        </div>
    );
};

export default CollegeCard;