export const Button = ({ children, language }) => {
    if (language) {
        return <button>ENG</button>;
    } else return <button>{children}</button>;
};
