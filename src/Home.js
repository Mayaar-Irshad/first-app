const Home = () => {
    const handleClick = () => {
        console.log("hello, people");
    };

    const handleClickAgain = (name) => {
        console.log("hello" + name);
    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button
                onClick={() => {
                    handleClickAgain("yaro");
                }}
            >
                click me again
            </button>
        </div>
    );
};

export default Home;
