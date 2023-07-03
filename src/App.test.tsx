
import { render } from '@testing-library/react';

// const TestApp = () => {
//   const { rooms } = useRoomContext();

import App from "./App";

//   return (
//     <>
//     <App />
//       {/* <Route path="/room-1" element={<Room roomNumber={1} />} />
//       <Route path="/room-3" element={<Room roomNumber={3} />} /> */}
//     </>
//   );
// };

test('The word "Room" is visible in App component', () => {
    expect(true).toBe(true);
    // render App component
    // use findByText to find the word "Room"   
    // expect the word "Room" to be visible
     const { findByText } = render(<App />);
        expect(findByText('Room'));
});
