import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TaskComponent from './TaskComponent'; 


//choose react component that will be tested
describe('TaskComponent', () => {
    
  //testing DOM in component
  test('Test input change and submission', () => {
    const { getByPlaceholderText, getByText } = render(<TaskComponent />);
    
    const input = getByPlaceholderText('Enter your answer');
    const submitButton = getByText('Submit');

    //input something to input field
    fireEvent.changeText(input, 'test input');
    //check if it was changed as intended 
    expect(input.props.value).toBe('test input');

    //pressing submit button
    fireEvent.press(submitButton);
    
  });
})