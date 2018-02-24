import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

export default class Candidates extends React.Component {
  render() {

    const DATA = [
      {
        "taste": "fruity",
        "chardonay": 23,
        "carmenere": 58,
        "syrah": 88
      },
      {
        "taste": "bitter",
        "chardonay": 102,
        "carmenere": 32,
        "syrah": 80
      },
      {
        "taste": "heavy",
        "chardonay": 70,
        "carmenere": 65,
        "syrah": 52
      },
      {
        "taste": "strong",
        "chardonay": 69,
        "carmenere": 31,
        "syrah": 69
      },
      {
        "taste": "sunny",
        "chardonay": 24,
        "carmenere": 70,
        "syrah": 44
      }
    ];

    const MyResponsiveRadar = ({ data /* see data tab */ }) => (
      <ResponsiveRadar
        data={data}
        keys={[ 'chardonay', 'carmenere', 'syrah' ]}
        indexBy="taste"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        curve="linearClosed"
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotColor={{ theme: 'background' }}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={true}
        dotLabel="value"
        dotLabelYOffset={-12}
        colors={{ scheme: 'nivo' }}
        fillOpacity={0.25}
        blendMode="multiply"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        isInteractive={true}
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
  )

    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-4">
            <h3 className="font-weight-bold">Jon Snow</h3>
            <div className="border-top pt-2">Applying for: Product Manager, Growth</div>
            <div>Identified Focus Areas: Growth, Data</div>
          </div>
          <div className="col-8 border-left">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <button className="nav-link active">Averages</button>
              </li>
              <li className="nav-item mx-2">
                <button className="nav-link">Referencer Assessments</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Self Assessment</button>
              </li>
            </ul>

            <div className="container">
              <div>

                {MyResponsiveRadar(DATA)}

              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}