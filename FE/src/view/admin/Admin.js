import { Chart } from 'primereact/chart';
import * as React from 'react';
import { useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem';
import { Button } from 'primereact/button';
import Select from '@mui/material/Select';
import 'asset/style/admin.css';
// import GoogleMapReact from 'google-map-react';
import HistorySearchService from 'services/HistorySrearch.service';
import ProvinceService from 'services/province.service';

const historySearchService = new HistorySearchService();
const provinceService = new ProvinceService();

function Admin() {
    // const AnyReactComponent = ({ text }) => <div>{text}</div>;
    // const defaultProps = {
    //     center: {
    //         lat: 10.99835602,
    //         lng: 77.01502627
    //     },
    //     zoom: 11
    // };
    const date = new Date()
    const [statistical, setStatistical] = useState()
    const [chartData, setChartData] = useState({
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [
            {
                type: 'bar',
                label: 'Tỉnh/Thành phố',
                backgroundColor: '#66BB6A',
                data: statistical,
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
    const [province, setProvince] = useState([]);
    const getAllProvince = async () => {
        const results = await provinceService.getAllProvince()
        setProvince(results.data.data)
        setSelectprovince(results.data.data[0]._id)
        getAllHistoryByMonth(results.data.data[0]._id, date.getFullYear())
    }
    const [selectprovince, setSelectprovince] = useState('')
    const handleChange = (e) => {
        // setProvince(e.target.value);
        setSelectprovince(e.target.value)
        getAllHistoryByMonth(e.target.value, date.getFullYear())
        // getAllHistoryByMonth()
    };
    const getAllHistoryByMonth = async (idProvince, year) => {

        const results = await historySearchService.getAllHistoryProvinceSrearchByMonth(idProvince, year)
        let arr = []
        results.data.data.map((item) => {
            arr.push(item.searches)
        })
        setStatistical(arr)
        const datasets = [{
            type: 'bar',
            label: 'Tỉnh, Thành phố',
            backgroundColor: '#66BB6A',
            data: arr,
            borderColor: 'white',
            borderWidth: 1
        }]
        setChartData({
            ...chartData,
            datasets
        })
    }
    useEffect(() => {
        getAllProvince()
    }, [])
    return (
        <div className='admin'>
            <div className="admin__card">
                <Chart type="bar" data={chartData} options={lightOptions} />
            </div>
            <div className='admin__title'>
                <h2>BIỂU ĐỒ THÔNG KÊ LƯỢT TÌM KIẾM</h2>
            </div>
            <div className='admin__change'>
                <Select
                    labelId="demo-simple-select-label"
                    value={selectprovince}
                    label="province"
                    onChange={handleChange}>
                    {province.length !== 0 ? province.map((item, index) =>
                        <MenuItem key={index} value={item._id}>{item.nameProvince}</MenuItem>
                    ) : <div></div>}
                </Select>
                <div className='admin__change__downloadData'>
                    <Button label="Tải dữ liệu" className="p-button-success" />
                </div>
                <div className='admin__change__SaveData'>
                    <Button label="Sao lưu" className="p-button-success" />
                </div>
            </div>
            {/* <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div> */}
        </div>
    )
}
export default Admin