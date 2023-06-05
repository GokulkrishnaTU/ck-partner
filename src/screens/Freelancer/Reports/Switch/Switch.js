import React, { useState } from 'react';
import Switch from 'react-switch';

const OnOffSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={styles.container}>
      <Switch 
        onChange={() => setIsOn(!isOn)} 
        checked={isOn} 
        height={25} 
        width={45} 
        handleDiameter={20}
        offColor="#ff0000"
        onColor="#4669E8"
        offHandleColor="#ffffff"
        onHandleColor="#ffffff"
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default OnOffSwitch;
