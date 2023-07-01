/**
 * Conversions from metric to imperial: Multiply imperial to base metric, then convert metric. Vice versa.
 */

const units = {
    length: {
        "yoctometer ym": 10**-24,
        "zeptometer zm": 10**-21,
        "attometer am": 10**-18,
        "femtometer fm": 10**-15,
        "picometer pm": 10**-12,
        "nanometer nm": 10**-9,
        "micrometer µm": 10**-6,
        "millimeter mm": 10**-3,
        "centimeter cm": 10**-2,
        "decimeter dm": 10**-1,
        "meter m": 1,
        "decameter dam": 10**1,
        "hectometer hm": 10**2,
        "kilometer km": 10**3,
        "megameter Mm": 10**6,
        "gigameter Gm": 10**9,
        "terameter Tm": 10**12,
        "petameter Pm": 10**15,
        "exameter Em": 10**18,
        "zettameter Zm": 10**21,
        "yottameter Ym": 10**24,
        "inch in": 0.0254,
        "foot ft": 0.3048,
        "yard yd": 0.9144,
        "mile mi": 1609.344
    },
    area: {
        "square millimeter mm2": 10**-6,
        "square centimeter cm2": 10**-4,
        "square decimeter dm2": 10**-2,
        "square meter m2": 1,
        "square kilometer km2": 10**6,
        "square inch": 6.4516e-4,
        "square foot ft2": 0.09290304,
        "square yard yd2": 0.8361274,
        "square mile mi2": 2.589988e+6,
        "acre": 4046.86,
    },
    mass: {
        "yoctogram yg": 10**-24,
        "zeptogram zg": 10**-21,
        "attogram ag": 10**-18,
        "femotogram fg": 10**-15,
        "picogram pg": 10**-12,
        "nanogram ng": 10**-9,
        "microgram µg": 10**-6,
        "milligram mg": 10**-3,
        "centigram cg": 10**-2,
        "decigram dg": 10**-1,
        "gram g": 1,
        "decagram dag": 10**1,
        "hectogram hg": 10**2,
        "kilogram kg": 10**3,
        "megagram (tonne) Mg": 10**6,
        "gigagram Gg": 10**9,
        "teragram Tg": 10**12,
        "petagram Pg": 10**15,
        "exagram Eg": 10**18,
        "zettagram Zg": 10**21,
        "yottagram Yg": 10**24,
        "ounce oz": 28.349523125,
        "pound lb": 453.59237,
        "imperial ton": 1.0160469088e+6
    },
    time: {
        "nanosecond ns": 10**-9,
        "microsecond µs": 10**-6,
        "millisecond ms": 10**-3,
        "second s": 1,
        "minute m": 60,
        "hour hr": 3600,
        "day": 86400,
        "week": 604800,
        "fortnight": 1209600,
        "month": 2629800,
        "year": 31557600,
        "decade": 315576000,
        "century": 315576e+4,
        "millenium": 315576e+5
    },
    temperature: {
        "celsius": -272.15,
        "kelvin": 1,
        "fahrenheit": -457.87,
        "rankine": 1.8
    }
}

const Main = () => {
    const [page, setPage] = React.useState("convert")
    return (
        <div>
            <Title page={page} setPage={setPage}/>
            {page == "convert" && <QCContainer/>}
            {page == "reference" && <Reference />}
            {page == "about" && <About />}
        </div>
    )
}

function Reference() {
    return (<div id="reference-container" className="content-container">
        <p>
            This Unit Converter uses the International System of Units (SI) to represent all other units and make conversions uniform
            and accurate. For example, the meter (m) is the standard unit of length, and it is used to represent all other units
            of length regardless of whether that unit is metric or not (take that Americans!). 
            <br />
            <br />
            All values in the table below are represented in terms of their category's standard unit of measurement (ex: length = meters)
        </p>
        <div className="reference-table">
            <div className="reference-item">
                <h2 className="reference-item-title">Length (meters)</h2>
                <p className="left-col-p">
                    yoctometer ym<br />
                    zeptometer zm<br />
                    attometer am<br />
                    femtometer fm<br />
                    picometer pm<br />
                    nanometer nm<br />
                    micrometer µm<br />
                    millimeter mm<br />
                    centimeter cm<br />
                    decimeter dm<br />
                    meter<br />
                    decameter dam<br />
                    hectometer hm<br />
                    kilometer km<br />
                    megameter Mm<br />
                    gigameter Gm<br />
                    terameter Tm<br />
                    petameter Pm<br />
                    exameter Em<br />
                    zettameter Zm<br />
                    yottameter Ym<br />
                    inch in<br />
                    foot ft<br />
                    yard yd<br />
                    mile mi
                </p>
                <p>
                    10**-24<br />
                    10**-21<br />
                    10**-18<br />
                    10**-15<br />
                    10**-12<br />
                    10**-9<br />
                    10**-6<br />
                    10**-3<br />
                    10**-2<br />
                    10**-1<br />
                    1<br />
                    10**1<br />
                    10**2<br />
                    10**3<br />
                    10**6<br />
                    10**9<br />
                    10**12<br />
                    10**15<br />
                    10**18<br />
                    10**21<br />
                    10**24<br />
                    0.0254<br />
                    0.3048<br />
                    0.9144<br />
                    1609.344
                </p>
            </div>
            <div className="reference-item">
                <h2 className="reference-item-title">Area (square meters)</h2>
                <p className="left-col-p">
                    square millimeter mm2<br />
                    square centimeter cm2<br />
                    square decimeter dm2<br />
                    square meter m2<br />
                    square kilometer km2<br />
                    square inch<br />
                    square foot ft2<br />
                    square yard yd2<br />
                    square mile mi2<br />
                    acre
                </p>
                <p>
                    10**-6<br />
                    10**-4<br />
                    10**-2<br />
                    1<br />
                    10**6<br />
                    6.4516e-4<br />
                    0.09290304<br />
                    0.8361274<br />
                    2.589988e+6<br />
                    4046.86
                </p>
            </div>
            <div className="reference-item">
                <h2 className="reference-item-title">Mass (grams)</h2>
                <p className="left-col-p">
                    yoctogram yg<br />
                    zeptogram zg<br />
                    attogram ag<br />
                    femotogram fg<br />
                    picogram pg<br />
                    nanogram ng<br />
                    microgram µg<br />
                    milligram mg<br />
                    centigram cg<br />
                    decigram dg<br />
                    gram<br />
                    decagram dag<br />
                    hectogram hg<br />
                    kilogram kg<br />
                    megagram (tonne)<br />
                    gigagram Gg<br />
                    teragram Tg<br />
                    petagram Pg<br />
                    exagram Eg<br />
                    zettagram Zg<br />
                    yottagram Yg<br />
                    ounce oz<br />
                    pound lb<br />
                    imperial ton
                </p>
                <p>
                    10**-24<br />
                    10**-21<br />
                    10**-18<br />
                    10**-15<br />
                    10**-12<br />
                    10**-9<br />
                    10**-6<br />
                    10**-3<br />
                    10**-2<br />
                    10**-1<br />
                    1<br />
                    10**1<br />
                    10**2<br />
                    10**3<br />
                    10**6<br />
                    10**9<br />
                    10**12<br />
                    10**15<br />
                    10**18<br />
                    10**21<br />
                    10**24<br />
                    28.349523125<br />
                    453.59237<br />
                    1.0160469088e+6
                </p>
            </div>
            <div className="reference-item">
                <h2 className="reference-item-title">Time (seconds)</h2>
                <p className="left-col-p">
                    nanosecond ns<br />
                    microsecond µs<br />
                    millisecond ms<br />
                    second s<br />
                    minute m<br />
                    hour hr<br />
                    day<br />
                    week<br />
                    fortnight<br />
                    month<br />
                    year<br />
                    decade<br />
                    century<br />
                    millenium
                </p>
                <p>
                    10**-9<br />
                    10**-6<br />
                    10**-3<br />
                    1<br />
                    60<br />
                    3600<br />
                    86400<br />
                    604800<br />
                    1209600<br />
                    2629800<br />
                    31557600<br />
                    315576000<br />
                    315576e+4<br />
                    315576e+5
                </p>
            </div>
        </div>
        <div className="reference-table">
            <div className="reference-item">
                <h2 classname="reference-item-title">Temperature (kelvin)</h2>
                <p className="left-col-p">
                    Celsius<br />
                    Kelvin<br />
                    Fahrenheit<br />
                    Rankine
                </p>
                <p>
                    -272.15<br />
                    1<br />
                    -457.87<br />
                    1.8
                </p>
            </div>
        </div>
    </div>)
}

function About() {
    return (<div className="content-container">
        <p>
            This unit converter was made by me (Marcus Secu). That's about it. I can't really copyright the International System of Units, so I guess all I can say is I hope this converter helps you with whatever it is you need it to do.
            <br />
            <br />
            If you'd like to submit suggestions, <a href="https://discord.gg/f54k8RPMGU" target="_blank">join my Discord! :)</a>
        </p>
    </div>)
}

const Title = (props) => {
    return (
        <div id="title">
            <h1>Units2Units</h1>
            <button style={{backgroundColor: props.page == "convert" ? "rgb(50, 50, 50)" : "rgb(15, 15, 15)"}} onClick={() => {props.setPage("convert")}}>Convert</button>
            <button style={{backgroundColor: props.page == "reference" ? "rgb(50, 50, 50)" : "rgb(15, 15, 15)"}} onClick={() => {props.setPage("reference")}}>Reference</button>
            <button style={{backgroundColor: props.page == "about" ? "rgb(50, 50, 50)" : "rgb(15, 15, 15)"}} onClick={() => {props.setPage("about")}}>About</button>
        </div>
    )
}

const QCContainer = () => {
    return (
        <div className="content-container">
            <QCPanel />
        </div>
    )
}

function handle_input(e, unitInfo, setUnits) {
    setUnits({"unit1Type": unitInfo.unit1Type, "unit1Amount": e.target.value == "." ? "." : e.target.value.replace(/[A-Za-z\c\s\x\O\\\|\/\?\'\"\;\:\]\}\[\{\}\,\<\>\!\@\#\$\%\Z^\&\*\(\)\_\=\+]*/g, ""), "unit2Type": unitInfo.unit2Type, "unit2Amount": unitInfo.unit2Amount});
}

const QCPanel = () => {
    const [unitCategory, setCategory] = React.useState()
    const [unitInfo, setUnits] = React.useState({"unit1Type": "", "unit1Amount": "", "unit2Type": "", "unit2Amount": ""})

    return (
        <div className="qc-panel">
            <UnitCategories category={unitCategory} setCategory={setCategory} setUnits={setUnits}/>
            <div className="user-fields">
                <div style={{display: "flex", flexFlow: "column"}}>
                    <input maxLength={64} value={unitInfo.unit1Amount} readOnly={unitInfo.unit1Type && unitInfo.unit2Type ? false : true} style={{borderColor: unitInfo.unit1Type && unitInfo.unit2Type ? "" : "transparent"}} onChange={(e) => {handle_input(e, unitInfo, setUnits) }}>
                    </input>
                </div>
                <p style={{visibility: unitCategory && unitInfo.unit1Type && unitInfo.unit2Types ? "visible" : "hidden"}}>{"="}</p>
                <div style={{display: "flex", flexFlow: "column"}}>
                    <input id="output" value={unitInfo.unit1Type && unitInfo.unit1Amount && unitInfo.unit2Type && (Math.round(units[unitCategory][unitInfo.unit1Type]*unitInfo.unit1Amount/units[unitCategory][unitInfo.unit2Type]*1000000))/1000000 != NaN ? ((Math.round(units[unitCategory][unitInfo.unit1Type]*unitInfo.unit1Amount/units[unitCategory][unitInfo.unit2Type]*1000000))/1000000).toString()  : ""} placeholder={unitInfo.unit1Type && unitInfo.unit2Type ? "Output" : ""} maxLength={64} style={{borderColor: unitInfo.unit1Type && unitInfo.unit2Type ? "" : "transparent"}} readOnly={true}></input>
                </div>
            </div>
            <UnitDisplay unitInfo={unitInfo} />
            <UnitSelector unitInfo={unitInfo} setUnits={setUnits} category={unitCategory} />
        </div>
    )
}

function resetUnits(func) {
    func({"unit1Type": "", "unit1Amount": "", "unit2Type": "", "unit2Amount": ""})
}

function UnitCategories(props) {
    return (
        <div className="qc-categories">
            <button style={{filter: props.category == "length" ? "invert(100%)" : "invert(0%)"}} onClick={() => {props.setCategory("length"); resetUnits(props.setUnits)}}>Length</button>
            <button style={{filter: props.category == "area" ? "invert(100%)" : "invert(0%)"}} onClick={() => {props.setCategory("area"); resetUnits(props.setUnits)}}>Area</button>
            <button style={{filter: props.category == "mass" ? "invert(100%)" : "invert(0%)"}} onClick={() => {props.setCategory("mass"); resetUnits(props.setUnits)}}>Mass</button>
            <button style={{filter: props.category == "time" ? "invert(100%)" : "invert(0%)"}} onClick={() => {props.setCategory("time"); resetUnits(props.setUnits)}}>Time</button>
            <button style={{filter: props.category == "temperature" ? "invert(100%)" : "invert(0%)"}} onClick={() => {props.setCategory("temperature"); resetUnits(props.setUnits)}}>Temperature</button>
        </div>
    )
}

function UnitDisplay(props) {
    return (
        <div className="unit-display">
            <p>{props.unitInfo.unit1Type}</p>
            <p>{props.unitInfo.unit2Type}</p>
        </div>
    )
}

function unit_change(e, props, unit) {
    props.setUnits({"unit1Type": unit == 1 ? e.target.textContent : props.unitInfo.unit1Type, "unit1Amount": props.unitInfo.unit1Amount, "unit2Type": unit == 2 ? e.target.textContent : props.unitInfo.unit2Type, "unit2Amount": props.unitInfo.unit2Amount});
}

const UnitSelector = (props) => {
    return (
        <div className="unit-container">
            {props.category && 
            <div className="qc-unit-selection">
                {(() => {
                    return (Object.keys(units[props.category]).map((item, index) => {
                        return <button key={index} onClick={(e) => {unit_change(e, props, 1)}}>{item}</button>
                    }));
                })()}
            </div>}
            {props.category && 
            <div className="qc-unit-selection">
                {(() => {
                    return (Object.keys(units[props.category]).map((item, index) => {
                        return <button key={index} onClick={(e) => {unit_change(e, props, 2)}}>{item}</button>
                    }));
                })()}
            </div>}
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector("#main"))
root.render(<Main/>)