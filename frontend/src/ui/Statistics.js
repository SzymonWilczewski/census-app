import React from 'react'
import Charts from './Charts';
import UnemploymentChart from './UnemploymentChart';
import data from '../surveys.json';

function Statistics() {
    return (
        <div>
            <Charts data={data}/>
            <UnemploymentChart data={data}/>
        </div>
    )
}

export default Statistics
