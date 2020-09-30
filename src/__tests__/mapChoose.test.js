import mapChooser from "../mapChooser";

describe("mapChooser", function(){
    it("return an image file name based on it's input", function () {
        let expected = "portland.jpeg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    })
    it("return default file name if input is empty", function () {
        let expected = "default.jpeg";
        let actual = mapChooser();
        expect(actual).toEqual(expected);
    })
});