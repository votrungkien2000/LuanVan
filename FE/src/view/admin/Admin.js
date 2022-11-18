import { Chart } from 'primereact/chart';
import * as React from 'react';
import { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import 'asset/style/admin.css'

function Admin() {
    const [chartData, setChartData] = useState({
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12', 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [
            {
                type: 'bar',
                label: 'Dataset 1',
                backgroundColor: '#66BB6A',
                data: [
                    21,
                    100,
                    24,
                    75,
                    37,
                    65,
                    34,
                    34,
                    87,
                ],
                borderColor: 'white',
                borderWidth: 1
            },
        ]
    });

    const [lightOptions] = useState({
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }

    });
    const [age, setAge] = useState([
        {
            id: 1,
            name: 'Tháng 1'
        },
        {
            id: 2,
            name: 'Tháng 2'
        },
        {
            id: 3,
            name: 'Tháng 3'
        },
        {
            id: 4,
            name: 'Tháng 4'
        },
        {
            id: 5,
            name: 'Tháng 5'
        },
        {
            id: 6,
            name: 'Tháng 6'
        },
        {
            id: 7,
            name: 'Tháng 7'
        },
        {
            id: 8,
            name: 'Tháng 8'
        },
        {
            id: 9,
            name: 'Tháng 9'
        },
        {
            id: 10,
            name: 'Tháng 10'
        },
        {
            id: 11,
            name: 'Tháng 11'
        },
        {
            id: 12,
            name: 'Tháng 12'
        },
    ]);
    const [selectAge, setSelectAge] = useState(1)
    const handleChange = (e) => {
        // setAge(e.target.value);
        setSelectAge(e.target.value)
        console.log(e.target.value)
    };
    useEffect(()=>{
        setSelectAge(age[0].id)
    }, [])
    return (
        <div className='admin'>
            <div className="admin__card">
                <Chart type="bar" data={chartData} options={lightOptions} />
            </div>
            <div className='admin__change'>
                <Select
                    labelId="demo-simple-select-label"
                    value={selectAge}
                    label="Age"
                    onChange={handleChange}>
                    {age.map((item, index)=> 
                        <MenuItem key={index} value={item.id}>{item.name}</MenuItem>
                    )}
                </Select>
            </div>
        </div>
    )
}
export default Admin