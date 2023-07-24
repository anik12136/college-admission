import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const College = () => {

    const [colleges, setColleges] = useState([])


    useEffect(() => {
        // fetch('http://localhost:5000/colleges')
        fetch('https://college-server-anik12136.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
        // .catch(error => console.error(error))
    }, []);
    const sliceCollege = colleges.slice(1, 4);
    console.log(sliceCollege)
    return (

        <div>
            <h2 className="text-lime-500 text-5xl flex align-middle justify-center mt-10">Colleges</h2>
            <div className="grid grid-cols-3 gap-4 justify-center  my-20">
                {
                    sliceCollege.map(item => <CollegeCard
                        key={item._id}
                        item={item}
                    ></CollegeCard>)
                }
            </div>
        </div>
    );
};

export default College;