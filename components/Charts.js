import React from 'react'
import {
  LineChart,
  Line,
  PieChart,
  ResponsiveContainer,
  Sector,
  Cell,
  Pie,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
} from 'recharts'

import { Box } from '@chakra-ui/react'

export const TinyLineChart = (props) => {
  const { data = [] } = props
  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart width={300} height={100} data={data}>
          <Tooltip />
          <Line
            type='monotone'
            dataKey='total'
            stroke='#50c4cf'
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

export const DonutChart = (props) => {
  const { data = [] } = props
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill='white'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Tooltip />
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            labelLine={false}
            outerRadius={55}
            fill='#50c4cf'
            dataKey='value'>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}

export const BarChartWidget = (props) => {
  const { data = {} } = props

  return (
    <>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart width={150} height={40} data={data}>
          <Tooltip />
          <XAxis dataKey='label' />
          <Bar dataKey='orders' fill='#50c4cf' />
          <Bar dataKey='orders' fill='#994ff3' />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}
