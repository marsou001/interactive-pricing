import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PricingForm from "./PricingForm";

describe("PricingFormSliderGrid and PricingFormCheckbox components", () => {
    let pageViews: HTMLElement,
        pricePerMonth: HTMLElement,
        sliderInput: HTMLElement,
        switchHiddenInput: HTMLElement;
    const expectAfterEach = (
        pageViewsTextContent: string,
        pricePerMonthTextContent: string,
        sliderInputValue: string,
        switchHiddenInputIsChecked: boolean
    ): void => {
        expect(pageViews).toHaveTextContent(pageViewsTextContent);
        expect(pricePerMonth).toHaveTextContent(pricePerMonthTextContent);
        expect(sliderInput).toHaveValue(sliderInputValue);

        if (switchHiddenInputIsChecked) {
            expect(switchHiddenInput).toBeChecked();
        } else {
            expect(switchHiddenInput).not.toBeChecked();
        }
    };

    beforeEach(() => {
        render(<PricingForm />);
        pageViews = screen.getByTestId("page-views");
        pricePerMonth = screen.getByTestId("price-per-month");
        sliderInput = screen.getByRole("slider");
        switchHiddenInput = screen.getByRole("switch");
    });

    test("initial rendering", () => {
        expectAfterEach("50k pageviews", "$25/ month", "50000", false);
    });

    test("values after sliding and clicking the hidden input box", () => {
        fireEvent.change(sliderInput, {
            target: {
                value: "75000",
            },
        });

        expectAfterEach("75k pageviews", "$37/ month", "75000", false);
        userEvent.click(switchHiddenInput);
        expectAfterEach("75k pageviews", "$31/ month", "75000", true);
        userEvent.click(switchHiddenInput);
        expectAfterEach("75k pageviews", "$37/ month", "75000", false);

        fireEvent.change(sliderInput, {
            target: {
                value: "25000",
            },
        });

        expectAfterEach("25k pageviews", "$12/ month", "25000", false);
        userEvent.click(switchHiddenInput);
        expectAfterEach("25k pageviews", "$10/ month", "25000", true);

        fireEvent.change(sliderInput, {
            target: {
                value: "50000",
            },
        });

        expectAfterEach("50k pageviews", "$20/ month", "50000", true);
    });

    test("hitting the Spacebar key on the hidden checkbox", () => {
        fireEvent.keyDown(switchHiddenInput, { code: "Spacebar" });
        waitFor(
            () =>
                expectAfterEach(
                    "50k pageviews",
                    "$20/ month",
                    "50000",
                    true
                ),
            {
                timeout: 0,
            }
        );

        fireEvent.keyDown(switchHiddenInput, { code: "Spacebar" });
        waitFor(
            () =>
                expectAfterEach(
                    "50k pageviews",
                    "$25/ month",
                    "50000",
                    false
                ),
            {
                timeout: 0,
            }
        );
    });

    test("hitting the Enter key on the hidden checkbox", () => {
        fireEvent.keyDown(switchHiddenInput, { code: "Enter" });
        waitFor(
            () =>
                expectAfterEach(
                    "50k pageviews",
                    "$20/ month",
                    "50000",
                    true
                ),
            {
                timeout: 0,
            }
        );

        fireEvent.keyDown(switchHiddenInput, { code: "Enter" });
        waitFor(
            () =>
                expectAfterEach(
                    "50k pageviews",
                    "$20/ month",
                    "50000",
                    true
                ),
            {
                timeout: 0,
            }
        );
    });

    test("values after toggling the custom checkbox", () => {
        const customCheckbox: HTMLElement = screen.getByTestId(
            "custom-checkbox"
        );

        userEvent.click(customCheckbox);
        expectAfterEach("50k pageviews", "$20/ month", "50000", true);
        userEvent.click(customCheckbox);
        expectAfterEach("50k pageviews", "$25/ month", "50000", false);
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
