import { useContext } from 'react';
import RoomsContext from './RoomContext';

const roomsMap = new Map();

[...Array(10)].forEach((_, index) => {
  roomsMap.set(index, { isLampOn: false, lampColor: undefined });
});

export const useRoomContext = () => {
  const context = useContext(RoomsContext);

  if (!context) {
    throw new Error('useLampContext must be used within a LampProvider');
  }

  return context;
};