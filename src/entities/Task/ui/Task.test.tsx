import { render, screen } from "@testing-library/react";
import {Task} from "@/entities";

describe("Task UI", () => {
  test("Title и Body отображаются корректно", () => {
    const taskExample = {
      id: "asd424fs",
      title: "Тестирование",
      body: "Описание теста",
      done: false,
      colorTheme: "light",
    };
    render(<Task task={taskExample}/>);
    const title = screen.getByText(/тестирование/i);

    expect(title).toBeInTheDocument();
  });
});

export {};
