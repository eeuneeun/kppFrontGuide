import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ComposedChart,
  Area,
  Scatter,
} from 'recharts';

/************************ 
  
          DOUNUT 
      
*************************/

export function DounutChart(props) {
  const width = props.width;
  const height = props.height;

  const tmpData = [
    { name: '정상작동', value: 70 },
    { name: '확인필요', value: 25 },
    { name: '상태이상', value: 5 },
  ];

  const COLORS = ['#0fa060', '#fecf21', '#fe2e5b'];

  function onPieEnter(e) {
    // console.log(e)
  }

  return (
    <>
      <div className='dounut flex-center'>
        <PieChart
          width={width ? width : 220}
          height={height ? height : 220}
          onMouseEnter={onPieEnter}
        >
          <Pie
            data={tmpData}
            cx={'50%'}
            cy={'50%'}
            innerRadius={40}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            fill='#e1e1e1e1'
            stroke={0}
            stroke-linejoin={'round'}
            paddingAngle={0}
            dataKey='value'
            legendType={'circle'}
          >
            {tmpData.map((val, idx) => (
              <>
                <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
              </>
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
}

/************************ 
  
           LINE 
      
*************************/

export function CustomLineChart(props) {
  const data = props.data
    ? props.data
    : [
        {
          time: '0',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '1',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '2',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '3',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '4',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '5',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '6',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '7',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '8',
          발전량: 90,
          예상수익: 80,
        },
        {
          time: '9',
          발전량: 190,
          예상수익: 100,
        },
        {
          time: '10',
          발전량: 290,
          예상수익: 200,
        },
        {
          time: '11',
          발전량: 490,
          예상수익: 430,
        },
        {
          time: '12',
          발전량: 700,
          예상수익: 1200,
        },
        {
          time: '13',
          발전량: 800,
          예상수익: 1500,
        },
        {
          time: '14',
          발전량: 700,
          예상수익: 1200,
        },
        {
          time: '15',
          발전량: 690,
          예상수익: 1000,
        },
        {
          time: '16',
          발전량: 490,
          예상수익: 500,
        },
        {
          time: '17',
          발전량: 100,
          예상수익: 300,
        },
        {
          time: '18',
          발전량: 39,
          예상수익: 50,
        },
        {
          time: '19',
          발전량: 34,
          예상수익: 43,
        },
        {
          time: '20',
          발전량: 10,
          예상수익: 30,
        },
        {
          time: '21',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '22',
          발전량: 0,
          예상수익: 0,
        },
        {
          time: '23',
          발전량: 0,
          예상수익: 0,
        },
      ];
  const dataKey = props.datakey ? props.datakey : Object.keys(data[0]);
  const lineColorArr = [0, '#F79700', '#05A35F', '#999999'];

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          top: 30,
          right: 0,
          left: -20,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey={dataKey[0]} />
        <YAxis />
        <Tooltip />
        <Legend />

        {dataKey.map((item, i) => {
          if (i != 0) {
            return (
              <Line
                dataKey={item}
                stroke={lineColorArr[i]}
                dot={false}
                activeDot={{ r: 5 }}
              />
            );
          }
        })}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function CustomComposeChart(props) {
  const data = props.data
    ? props.data
    : [
        {
          time: '5',
          실제: 0,
          예측: 0,
        },
        {
          time: '6',
          실제: 0,
          예측: 0,
        },
        {
          time: '7',
          실제: 0,
          예측: 0,
        },
        {
          time: '8',
          실제: 90,
          예측: 80,
        },
        {
          time: '9',
          실제: 190,
          예측: 100,
        },
        {
          time: '10',
          실제: 290,
          예측: 200,
        },
        {
          time: '11',
          실제: 490,
          예측: 430,
        },
        {
          time: '12',
          실제: 700,
          예측: 1200,
        },
        {
          time: '13',
          실제: 800,
          예측: 1500,
        },
        {
          time: '14',
          실제: 700,
          예측: 1200,
        },
        {
          time: '15',
          실제: 690,
          예측: 1000,
        },
        {
          time: '16',
          실제: 490,
          예측: 500,
        },
        {
          time: '17',
          실제: 100,
          예측: 300,
        },
        {
          time: '18',
          실제: 39,
          예측: 50,
        },
        {
          time: '19',
          실제: 34,
          예측: 43,
        },
        {
          time: '20',
          실제: 10,
          예측: 30,
        },
        {
          time: '21',
          실제: 0,
          예측: 0,
        },
        {
          time: '22',
          실제: 0,
          예측: 0,
        },
        {
          time: '23',
          실제: 0,
          예측: 0,
        },
      ];
  const dataKey = props.dataKey ? props.dataKey : Object.keys(data[0]);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ComposedChart
        width={325}
        height={300}
        data={data}
        margin={{
          top: 30,
          right: 20,
          bottom: 20,
          left: -20,
        }}
      >
        <CartesianGrid stroke='#e1e1e1' />
        <XAxis dataKey={dataKey[0]} scale='band' />
        <YAxis />

        <Tooltip />
        <Legend />

        <Bar dataKey={dataKey[2]} barSize={17} fill='#05a35f' />
        <Line dataKey={dataKey[3]} stroke='#f79700' dot={{ r: 0 }} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}

/************************ 
  
           BAR 
      
*************************/

export function HozBarChart(props) {
  const barHeight = props.barHeight ?? 25;
  const label = props.label ?? '라벨';
  const val = props.val ?? 50;

  return (
    <dl className='hoz-bar-chart'>
      <dt>{label}</dt>
      <dd style={{ height: `${barHeight}px` }}>
        <span style={{ width: `${val}%` }}>{val}</span>
      </dd>
    </dl>
  );
}

export function BasicBarChart(props) {
  console.log(props.data);
  const data =
    props.data !== null && props.data !== undefined && props.data.length !== 0
      ? props.data
      : [
          {
            date: '8.15',
            수익: 4000,
            예측수익: 2400,
          },
          {
            date: '8.16',
            수익: 3000,
            예측수익: 1398,
          },
          {
            date: '8.17',
            수익: 2000,
            예측수익: 9800,
          },
        ];

  const barColorArr = [0, '#05a35f', '#f79700', '#FF2A5C'];
  const dataKey = props.datakey ? props.datakey : Object.keys(data[0]);

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 40,
          right: 10,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid stroke='#e1e1e1' />

        <XAxis dataKey={dataKey[0]} />
        <YAxis />

        <Tooltip />
        <Legend verticalAlign='bottom' height={30} />

        {dataKey.map((item, i) => {
          if (i != 0) {
            return <Bar dataKey={item} fill={barColorArr[i]} barSize={10} />;
          }
        })}
      </BarChart>
    </ResponsiveContainer>
  );
}
