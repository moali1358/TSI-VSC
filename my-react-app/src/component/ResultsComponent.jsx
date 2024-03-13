import React, { useState, useEffect } from 'react';
import '../App.css';
function ResultsComponent() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('http://ergast.com/api/f1/2024/1/results.json');
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData.MRData.RaceTable.Races[0].Results);
        } catch (error) {
            console.log(`error`, error);
        }
    }

    return (
        <div className='Header'>
            <h1>
                Results
            </h1>
        
        <table className='Table'>
            <thead>
              <tr>
                <th>Position</th>
                <th>Points</th>
                <th>Driver</th>
                <th>Laps</th>
                <th>Status</th>
             </tr>
            </thead>

            <tbody>
                    {
                        data.map((item, i) => (
                            <tr key={i}> 
                            <td>{item.position}</td>
                            <td>{item.points}</td>
                            <td>{item.Driver.givenName} {item.Driver.familyName}</td>
                            <td>{item.laps}</td>
                            <td>{item.status}</td>
                            </tr>
                        ))
                    }
            </tbody>

        </table>
        </div>
    )
}
export default ResultsComponent;