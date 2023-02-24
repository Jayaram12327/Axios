import { getAllQoutes } from "../Services/axiosAPI";
import { useState,useEffect } from "react";

const ComponentB = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        console.log('MOUNTING')
        getDataList();
    }, []);

    const getDataList = async () => {
        const dataList = await getAllQoutes();
        console.log('Quotes: Axios: ', dataList);
        setData(dataList.data);
    }

    useEffect(() => {
            console.log('Quotes NOW: ', data);
        }, [data])
    return(
        <div>
               <h1>Axios's using API</h1>
               <div>
            <h1>APIs using Axios</h1>
            <div className="quotes-container">
            {data.length ? data.map((studentData, i) => (
                <div key={i}>
                    <p>Quote: {studentData}</p>
                    <p>Auther: {studentData.first_name}</p>
                </div>
            )): <div>Loading...</div>}
            </div>
            </div>

        </div>
    )
}

export default ComponentB;