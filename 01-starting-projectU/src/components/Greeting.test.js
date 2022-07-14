import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders hello world as a text', () => {
    // arrange
    render(<Greeting/>);
  
    // act
    // ... nothing
  
    // assert
    const hellowWorldElement = screen.getByText('Hello world!', {exact: true });
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test('renders good to see you if button not clicked', () => {
    // arrange
    render(<Greeting/>);
  
    // act
    
  
    // assert
    const textElement = screen.getByText("it's good to see you!", {exact: true });
    expect(textElement).toBeInTheDocument();
  });

  test('renders changed if button clicked', () => {
    // arrange
    render(<Greeting/>);
  
    // act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
  
    // assert
    const hellowWorldElement = screen.getByText('Changed!', {exact: true });
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test('does not renders good to see you if button not clicked', () => {
    // arrange
    render(<Greeting/>);
  
    // act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
  
    // assert
    const hellowWorldElement = screen.queryByText("it's good to see you!", {exact: true });
    expect(hellowWorldElement).toBeNull();
  });
});

