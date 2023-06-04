import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from '@testing-library/react'
import Balls from './Balls'

import profile from '../..//mocks/profile.json';
import esferas from '../../mocks/esferas.json';

const profileBalls = profile.profile 
const dragonBalls = esferas

const PrepareBalls = () => {
  const [balls, setBalls] = useState(dragonBalls.balls);
  const [profile, setProfile] = useState(profileBalls);

  return (
    <Balls balls={balls} setBalls={setBalls} profile={profile} setProfile={setProfile} />
  )
}

describe("<Balls /> test", () => {
  it("should show 7 balls when filter balls by 'Todas as esferas'", () => {
    render(<PrepareBalls />);
    fireEvent.change(screen.getByTestId('filter'), { target: { value: "all" } });
    const ballsElements = screen.getAllByText(/estrela/i);
    expect(ballsElements.length).toBe(7);
  });
  
  it("should show 4 balls when filter balls by 'Minhas esferas'", () => {
    render(<PrepareBalls />);
    fireEvent.change(screen.getByTestId('filter'), { target: { value: "me" } });
    const ballsElements = screen.getAllByText(/estrela/i);
    expect(ballsElements.length).toBe(4);
  });

  it("should show 3 balls when filter balls by 'Não tenho'", () => {
    render(<PrepareBalls />);
    fireEvent.change(screen.getByTestId('filter'), { target: { value: "notme" } });
    const ballsElements = screen.getAllByText(/estrela/i);
    expect(ballsElements.length).toBe(3);
  });
})
