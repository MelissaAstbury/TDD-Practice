import mapChooser from "../mapChooser";

describe("mapChooser", () => {
    it("return an image file name based on it's input", () => {
        let expected = "portland.jpeg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    })
    it("return default file name if input is empty", () => {
        let expected = "default.jpeg";
        let actual = mapChooser();
        expect(actual).toEqual(expected);
    })
});