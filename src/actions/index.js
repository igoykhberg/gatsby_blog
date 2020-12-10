const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'
const TOGGLE_THEME_MODE = 'TOGGLE_THEME_MODE'

const changeFontSize = (size) => {
    return {type: CHANGE_FONT_SIZE, size}
}

const toggleThemeMode = (mode) => {
    return {type: TOGGLE_THEME_MODE, mode}
}

export {
    changeFontSize,
    toggleThemeMode
}