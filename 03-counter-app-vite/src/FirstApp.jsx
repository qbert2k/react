const newMessage = {
    message: 'Hola Mundo',
    title: 'title'
};

const getResult = (a, b) => a + b;

export const FirstApp = ({title, num}) => {

    // console.log(props);

    return (<>
        <h1>{title}</h1>
        <h2>{num + 5}</h2>
        <h2>{newMessage.title}</h2>
        <code>{JSON.stringify(newMessage)}</code>
        <p>Soy un texto</p>

        <p>{getResult(5, 6)}</p>
    </>);
}