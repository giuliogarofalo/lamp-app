import React, { useState, useContext, Dispatch, FC, createContext, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import { useRoomContext } from './RoomContext';
import type { Color } from './const';

interface RoomProps {
  roomNumber: number;
}


const Room: FC<RoomProps> = ({ roomNumber }) => {
  const {rooms, setRooms} = useRoomContext();
  
  // const roomState = rooms[roomNumber] || { isLampOn: false, lampColor: undefined };
  const roomState = rooms[roomNumber];
  const { isLampOn, lampColor } = roomState;

  const handleToggleLamp = () => {
    console.log(roomNumber)
    const updatedRooms = {
      ...rooms,
    [roomNumber]: { 
      ...roomState, 
      isLampOn: !isLampOn,
      lampColor: isLampOn ? undefined : lampColor,
    },
    };
    setRooms(updatedRooms);
  };

  const handleColorChange = (color: string) => {
    const updatedRooms = {
      ...rooms,
        [roomNumber]: { ...roomState, lampColor: color as Color },
    };
    setRooms(updatedRooms);
  };

  const roomStyle = isLampOn ? 'bg-gray-800' : 'bg-gray-100';

  return (
      <div className={`h-screen flex justify-center items-center wh-100 ${roomStyle}`}>
        <div className="p-4 bg-white rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Room {roomNumber}</h1>
          <button onClick={handleToggleLamp} className="px-4 py-2 bg-blue-500 text-white rounded">
            {isLampOn ? 'Turn Off' : 'Turn On'}
          </button>
         
            <div className={`mt-4 w-20 h-20 rounded-full mx-auto bg-${lampColor}-500`} data-testid="lamp" />
          
            <div className="mt-4 flex justify-center space-x-2">        
                {isLampOn && ['red', 'green', 'blue', 'yellow'].map((color)=> {
                    return (
                        <button key={color} onClick={() => handleColorChange(color)} className={`w-6 h-6 bg-${color}-500 rounded-full`} />
                    )
                })}   
            </div>
        </div> 
        
      </div>
  );
};

export default Room;
