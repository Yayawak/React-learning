import { render, screen } from '@testing-library/react';
import App from './App';

test('renders เว็พแอพคำนวณ bmi', () => {
    render(<App />);
    const linkElement = screen.getByText(/เว็พแอพคำนวณ bmi/i);
    expect(linkElement).toBeInTheDocument();
});
