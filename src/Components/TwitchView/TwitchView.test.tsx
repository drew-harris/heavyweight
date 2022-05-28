import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import TwitchView from "./TwitchView";

test("disable button works", () => {
  render(<TwitchView />);
  const button = screen.getByText("Hide");
  const iframe = screen.getByTitle("twitch-view");
  expect(button).toBeInTheDocument();
  expect(iframe).toBeInTheDocument();
  fireEvent.click(button);
  expect(screen.queryByTitle("twitch-view")).not.toBeInTheDocument();
});

export {};
