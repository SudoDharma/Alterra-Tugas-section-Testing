import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue"

describe("when rendered", () => {
    it("Return initial value", () => {
        const { result } = renderHook(() => useInputValue("Test"))

        expect(result.current.value).toEqual("Test")
    })
})

// describe("when re-rendered with another initial value", () => {
//     it("Changes the value", () => {
//         const { result, rerender } = renderHook(
//             ({ text }) => useInputValue(text), 
//             {initialProps: { text: "Test String" },
//         })

//         rerender({ text: "Changed"})
//         expect(result.current.value).toEqual("Changed")
//     })
// })