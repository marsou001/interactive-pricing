import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PricingForm from "./PricingForm";

describe("PricingFormSliderGrid and PricingFormCheckbox components", () => {
    let pageViews: HTMLElement,
        pricePerMonth: HTMLElement,
        sliderInput: HTMLElement,
        switchInput: HTMLElement;
    const expectAfterEach = (
        pageViewsTextContent: string,
        pricePerMonthTextContent: string,
        sliderInputValue: string,
        switchInputIsChecked: boolean
    ): void => {
        expect(pageViews).toHaveTextContent(pageViewsTextContent);
        expect(pricePerMonth).toHaveTextContent(pricePerMonthTextContent);
        expect(sliderInput).toHaveValue(sliderInputValue);

        if (switchInputIsChecked) {
            expect(switchInput).toBeChecked();
        } else {
            expect(switchInput).not.toBeChecked();
        }
    };

    beforeEach(() => {
        render(<PricingForm />);
        pageViews = screen.getByTestId("page-views");
        pricePerMonth = screen.getByTestId("price-per-month");
        sliderInput = screen.getByRole("slider");
        switchInput = screen.getByRole("switch");
    });

    test("initial rendering", () => {
        expectAfterEach("50k pageviews", "$25.00/ month", "50000", false);
    });

    test("values after sliding and checking the box", () => {
        fireEvent.change(sliderInput, {
            target: {
                value: "75000",
            },
        });

        expectAfterEach("75k pageviews", "$37.00/ month", "75000", false);
        userEvent.click(switchInput);
        expectAfterEach("75k pageviews", "$31.00/ month", "75000", true);
        userEvent.click(switchInput);
        expectAfterEach("75k pageviews", "$37.00/ month", "75000", false);

        fireEvent.change(sliderInput, {
            target: {
                value: "25000",
            },
        });

        expectAfterEach("25k pageviews", "$12.00/ month", "25000", false);
        userEvent.click(switchInput);
        expectAfterEach("25k pageviews", "$10.00/ month", "25000", true);

        fireEvent.change(sliderInput, {
            target: {
                value: "50000",
            },
        });
        
        expectAfterEach("50k pageviews", "$20.00/ month", "50000", true);
    });
});

describe("PricingFormSubmit component rendering", () => {
    it("renders", () => {
        render(<PricingForm />);
        const listItem = screen.getAllByRole("listitem")[0];
        const submitButton = screen.getByTestId("start-my-trial");

        expect(listItem).toHaveTextContent(/Unlimited websites/);
        expect(submitButton).toBeInTheDocument();
    });
});
