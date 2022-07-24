import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
// style 
import "../../scss/components/PerfChart.scss"

const data = [
  {
    subject: 'Vanilla Js',
    A: 75,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'React js / Redux',
    A: 80,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'HTML / CSS',
    A: 100,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'Testing',
    A: 60,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'UX/UI',
    A: 60,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'Agile',
    A: 60,
    B: 100,
    fullMark: 100,
  },
];

function PerfChartCode () {
 
    return (
        <ResponsiveContainer width="100%" height="90%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="whitesmocke" fill="#05DB91" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    )
  }
  export default PerfChartCode