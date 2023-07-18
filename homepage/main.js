function App()
{
    return <div id="main">
        <div id="title">
            <img src={"./res/images/banner.png"} />
        </div>
        <div id="body-stuff">
            <div style={{width: '100px', height: '100px', backgroundColor: 'red'}}>Hello</div>
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />)