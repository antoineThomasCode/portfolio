import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
// style 
import "../../scss/components/PerfChart.scss"

const data = [
  {
    subject: 'Productivity',
    A: 70,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'Learning ability',
    A: 85,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'Problem solving',
    A: 80,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'Creativity',
    A: 80,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'Autonomy',
    A: 80,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'enthusiasm',
    A: 100,
    B: 100,
    fullMark: 100,
  },
];

function PerfChart () {
 
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
  export default PerfChart
