const mapChooser = (locationName) => {
    if (locationName === undefined) {
        locationName = "default";
    }

    return `${locationName}.jpeg`;
}

export default mapChooser;