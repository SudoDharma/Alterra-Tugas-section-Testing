import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

import Search from "./Search";

jest.mock("axios")

describe("Seacrh", () => {
    // test("Fetch story success", async () => {
    //     const stories = [
    //         {objectId: "1", title: "hello"},
    //         {objectId: "2", title: "react"}
    //     ]

    //     axios.get.mockImplementationOnce(() => {
    //         Promise.resolve({data: { hits: stories }})
    //     })

    //     render(<Search/>)

    //     await act(async() => {
    //         await userEvent.click(screen.getByRole("button"))
    //     })

    //     const items = await screen.findAllByRole("listitem")

    //     expect(items).toHaveLength(2)
    // })

    test("Fetch story failed", async () => {
        axios.get.mockImplementationOnce(() => {
            Promise.reject(new error())
        })

        render(<Search/>)

        await act(async() => {
            await userEvent.click(screen.getByRole("button"))
        })

        const items = await screen.findByText("Ada yang error ...")

        expect(items).toBeInTheDocument()
    })
})