import React from 'react';
import { Statistic } from 'semantic-ui-react';

function DisplayBallance(props) {

  const { size='tiny',
          color='black',
          title,
          value,
        } = props;
        
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{textAlign: "left"}}>
        {title}
      </Statistic.Label>
      <Statistic.Value>
        {isNaN(+value)? 0: `${value}$`}
      </Statistic.Value>
    </Statistic>
  )
}

export default DisplayBallance;
