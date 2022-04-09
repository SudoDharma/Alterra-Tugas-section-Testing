import { render, screen, fireEvent } from "@testing-library/react";

import FormCoding from "./FormCoding"

describe("Form Coding", () => {
    test("Render Form Coding component", () => {
        render(<FormCoding/>)

        expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument()
        expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument()
    })

    test("Input text for all input", () => {
        render(<FormCoding/>)

        fireEvent.input(
            screen.getByRole("textbox", {name: /Nama/i}), 
            {target: {value: "Bobby"}}
        )

        fireEvent.input(
            screen.getByRole("textbox", {name: /Email/i}), 
            {target: {value: "mail@email.com"}}
        )

        fireEvent.input(
            screen.getByRole("spinbutton", {name: /No Handphone/i}), 
            {target: {value: "123456789"}}
        )

        fireEvent.input(
            screen.getByRole("textbox", {name: /Harapan Untuk Coding Bootcamp Ini/i}), 
            {target: {value: "Harapan"}}
        )

        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Bobby")
        expect(screen.getByLabelText(/Email/)).toHaveValue("mail@email.com")
        expect(screen.getByLabelText(/No Handphone/)).toHaveValue(123456789)
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("Harapan")
    })

    test("Input warning message", () => {
        render(<FormCoding/>)
        
        fireEvent.input(
            screen.getByRole("textbox", {name: /Nama/i}), 
            {target: {value: "Bobby4"}}
        )

        fireEvent.input(
            screen.getByRole("textbox", {name: /Email/i}), 
            {target: {value: "mailgmailcom"}}
        )

        expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument()
        expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument()

    })

    test("Submit button", () => {
        render(<FormCoding/>)

        fireEvent.input(
            screen.getByRole("button", {name: /Submit/i})
        )

        expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("")
        expect(screen.getByLabelText(/Email/)).toHaveValue("")
        expect(screen.getByLabelText(/No Handphone/)).toHaveValue(null)
        expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini/)).toHaveValue("")
    })
})