let scrollToID = (id) =>
{
    document.querySelector(`#${id}`).scrollIntoView({behavior: "smooth"});
}

let SideBarNav = () =>
{
    return (
        <div className="sidebar-nav">
            <h2>check out my:</h2>
            <button onClick={() => {scrollToID("games")}}>games</button>
            <button onClick={() => {scrollToID("projects")}}>projects</button>
            <button onClick={() => {scrollToID("socials")}}>socials</button>
            <div style={{height: '100%'}}></div>
            <button onClick={(()=>{window.scrollTo({ top: 0, behavior: 'smooth' })})}>back to top</button>
        </div>
    )
}

let BodyContentContainer = () =>
{
    return (
        <div className="body-content-container">

            <div id="games" className="body-section">

                <h2>games</h2>

                <div className="body-section-content">

                    <div className="display-card" style={{backgroundImage: "url(./res/images/snake_icon.png)"}} onClick={(() => {window.location.href = "./pages/snake/index.html"})}>
                        <div className="display-card-background"></div>
                    </div>
                </div>
            </div>

            <div id="projects" className="body-section">

                <h2>projects</h2>

                <div className="body-section-content">
                </div>
            </div>

            <div id="socials" className="body-section">

                <h2>socials</h2>

                <div className="body-section-content">

                    <div className="display-card">
                        YouTube
                    </div>
                    <div className="display-card">
                        Discord
                    </div>
                </div>
            </div>
        </div>
    )
}

class App extends React.Component
{
    constructor()
    {
        super()
        this.state = 
        {}
    }

    render()
    {
        return (
            <div>
                <div id="titlePage">
                    <h1>bro, this is sick</h1>
                </div>
                <div className="body-container">
                    <SideBarNav />
                    <BodyContentContainer />
                </div>
                <footer>
                    FOOTER
                </footer>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />)