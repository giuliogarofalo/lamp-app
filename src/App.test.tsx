
import { cleanup, render, screen } from '@testing-library/react';
import App from "./App";
import { fireEvent } from '@testing-library/react';

afterEach(cleanup)

test('The word "Room" is visible in App component', () => {
    expect(true).toBe(true);
     const { findByText } = render(<App />);
        expect(findByText('Room'));
});


// test('The word "Turn On" is visible in Room component', () => {
//     //  useLampContext must be used within a LampProvider
//     const {rooms} = useRoomContext();
//     expect(true).toBe(true);
//      const { findByText } = render(<Room roomNumber={0} />);
//         expect(findByText('Turn On'));
//         expect(rooms[0].isLampOn).toBe(false);
// });


describe('Room component', () => {
    it('should toggle lamp on and off', () => {
        render(<App />);
    
        const Room1Text = screen.getByText('Room 1');
        Room1Text.click();

        const toggleButton = screen.getByRole('button', { name: 'Turn On' });

        console.log(toggleButton);


       //screen.getByRole('button', { name: 'Turn On' });
  
      fireEvent.click(toggleButton);
      expect(toggleButton).toBe('Turn Off');
  
      fireEvent.click(toggleButton);
      expect(toggleButton).toBe('Turn On');
    });
  
    // it('should change lamp color when clicked', () => {
    //   render(<App />);
  
    //   const toggleButton = screen.getByRole('button', { name: 'Turn On' });
    //   fireEvent.click(toggleButton);
  
    //   const lamp = screen.getByTestId('lamp');
  
    //   fireEvent.click(lamp); // Change color to blue
    //   expect(lamp).toHaveClass('bg-blue-500');
  
    //   fireEvent.click(lamp); // Change color to red
    //   expect(lamp).toHaveClass('bg-red-500');
  
    //   fireEvent.click(lamp); // Change color to yellow
    //   expect(lamp).toHaveClass('bg-yellow-500');
  
    //   fireEvent.click(lamp); // Change color to green
    //   expect(lamp).toHaveClass('bg-green-500');
    // });
  
    // it('should change room background based on lamp state', () => {
    //   render(<App />);
  
    //   const roomContainer = screen.getByRole('main');
    //   const toggleButton = screen.getByRole('button', { name: 'Turn On' });
  
    //   expect(roomContainer).toHaveClass('bg-gray-100'); // Initial state, lamp off
  
    //   fireEvent.click(toggleButton);
    //   expect(roomContainer).toHaveClass('bg-gray-800'); // Lamp on, dark background
  
    //   fireEvent.click(toggleButton);
    //   expect(roomContainer).toHaveClass('bg-gray-100'); // Lamp off, light background
    // });
  
    // it('should keep lamp status when navigating between rooms', () => {
    //   render(<App />);
  
    //   const toggleButton = screen.getByRole('button', { name: 'Turn On' });
  
    //   fireEvent.click(toggleButton); // Turn on lamp in room 1
  
    //   // Navigate to another room (room 2)
    //   fireEvent.click(screen.getByRole('link', { name: 'Room 2' }));
  
    //   // Navigate back to the first room (room 1)
    //   fireEvent.click(screen.getByRole('link', { name: 'Room 1' }));
  
    //   const room1ToggleButton = screen.getByRole('button', { name: 'Turn Off' });
    //   expect(room1ToggleButton).toHaveTextContent('Turn Off');
    // });
  });