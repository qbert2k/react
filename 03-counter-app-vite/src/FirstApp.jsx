const newMessage = {
    message: 'Hola Mundo',
    title: 'title'
};

const getResult = (a, b) => a + b;

export const FirstApp = () => {
    return (<>
        <h1>{newMessage.title}</h1>
        <code>{JSON.stringify(newMessage)}</code>
        <p>Soy un texto</p>

        <p>{getResult(5, 6)}</p>
    </>);
}