import { render, screen } from "@testing-library/react";
import CallToAction from "./CallToAction";

describe("testing CallToAction component", () => {
    test("header have textContent", () => {
        render(<CallToAction />);
        const header = screen.getByRole("heading", { level: 2 });
        expect(header).toHaveTextContent("Simple, traffic-based pricing");
    });
    test("renders header", () => {
        render(<CallToAction />);
        const header = screen.getByRole("heading", { level: 2 });
        expect(header).toBeInTheDocument();
    });
    test("renders paragraph", () => {
        render(<CallToAction />);
        const paragraph = screen.getByText(/Sign-up for our 30-day trial\./);
        expect(paragraph).toBeInTheDocument();
    });
});
