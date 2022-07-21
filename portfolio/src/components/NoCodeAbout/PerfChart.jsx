import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Productivity',
    A: 50,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'LeaderShip',
    A: 75,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'problem solver',
    A: 80,
    B: 100,
    fullMark: 100,
  },
  {
    subject: 'creativity',
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
    subject: 'stress Gestion',
    A: 100,
    B: 100,
    fullMark: 100,
  },
];

function PerfChart () {
 
    return (

        <ResponsiveContainer width="80%" height="90%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="whitesmocke" fill="#05DB91" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>

    )
  }
  export default PerfChart
