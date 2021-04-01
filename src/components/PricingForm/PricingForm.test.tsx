import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PricingForm from "./PricingForm";
import PricingFormSubmit from "./PricingFormSubmit/PricingFormSubmit";

describe("PricingForm component", () => {
    test("initial rendering", () => {
        render(<PricingForm />);
        const pageViews = screen.getByText(/50k\spageviews/);
        const pricePerMonth = screen.getByTestId("price-per-month");
        const sliderInput = screen.getByRole("slider");
        const switchInput = screen.getByRole("switch");

        expect(pageViews).toBeInTheDocument();
        expect(pricePerMonth).toHaveTextContent("$25.00/ month");
        expect(sliderInput).toHaveValue("50000");
        expect(switchInput).not.toBeChecked();
    });

    test("rendering after sliding to the right", () => {
        render(<PricingForm />);

        const pageViews = screen.getByTestId("page-views");
        const pricePerMonth = screen.getByTestId("price-per-month");
        const sliderInput = screen.getByRole("slider");
        const switchInput = screen.getByRole("switch");

        fireEvent.change(sliderInput, {
            target: {
                value: "75000",
            },
        });

        expect(pageViews).toHaveTextContent("75k pageviews");
        expect(pricePerMonth).toHaveTextContent("$37.00/ month");
        expect(sliderInput).toHaveValue("75000");
        expect(switchInput).not.toBeChecked();

        userEvent.click(switchInput);

        expect(pageViews).toHaveTextContent("75k pageviews");
        expect(pricePerMonth).toHaveTextContent("$31.00/ month");
        expect(sliderInput).toHaveValue("75000");
        expect(switchInput).toBeChecked();

        userEvent.click(switchInput);

        expect(pageViews).toHaveTextContent("75k pageviews");
        expect(pricePerMonth).toHaveTextContent("$37.00/ month");
        expect(sliderInput).toHaveValue("75000");
        expect(switchInput).not.toBeChecked();

        fireEvent.change(sliderInput, {
            target: {
                value: "25000",
            },
        });

        expect(pageViews).toHaveTextContent("25k pageviews");
        expect(pricePerMonth).toHaveTextContent("$12.00/ month");
        expect(sliderInput).toHaveValue("25000");
        expect(switchInput).not.toBeChecked();

        userEvent.click(switchInput);

        expect(pageViews).toHaveTextContent("25k pageviews");
        expect(pricePerMonth).toHaveTextContent("$10.00/ month");
        expect(sliderInput).toHaveValue("25000");
        expect(switchInput).toBeChecked();

        fireEvent.change(sliderInput, {
            target: {
                value: "50000",
            },
        });

        expect(pageViews).toHaveTextContent("50k pageviews");
        expect(pricePerMonth).toHaveTextContent("$20.00/ month");
        expect(sliderInput).toHaveValue("50000");
        expect(switchInput).toBeChecked();
    });
    test("PricingFormSubmit component rendering", () => {
        render(<PricingFormSubmit />);

        const listItem = screen.getAllByRole("listitem")[0];
        const submitButton = screen.getByTestId("start-my-trial");

        expect(listItem).toHaveTextContent(/Unlimited websites/);
        expect(submitButton).toBeInTheDocument();
    });
});
