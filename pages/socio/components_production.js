"use strict";

/**
 * Conversions from metric to imperial: Multiply imperial to base metric, then convert metric. Vice versa.
 */
const units = {
  length: {
    "yoctometer ym": 10 ** -24,
    "zeptometer zm": 10 ** -21,
    "attometer am": 10 ** -18,
    "femtometer fm": 10 ** -15,
    "picometer pm": 10 ** -12,
    "nanometer nm": 10 ** -9,
    "micrometer µm": 10 ** -6,
    "millimeter mm": 10 ** -3,
    "centimeter cm": 10 ** -2,
    "decimeter dm": 10 ** -1,
    "meter m": 1,
    "decameter dam": 10 ** 1,
    "hectometer hm": 10 ** 2,
    "kilometer km": 10 ** 3,
    "megameter Mm": 10 ** 6,
    "gigameter Gm": 10 ** 9,
    "terameter Tm": 10 ** 12,
    "petameter Pm": 10 ** 15,
    "exameter Em": 10 ** 18,
    "zettameter Zm": 10 ** 21,
    "yottameter Ym": 10 ** 24,
    "inch in": 0.0254,
    "foot ft": 0.3048,
    "yard yd": 0.9144,
    "mile mi": 1609.344
  },
  area: {
    "square millimeter mm2": 10 ** -6,
    "square centimeter cm2": 10 ** -4,
    "square decimeter dm2": 10 ** -2,
    "square meter m2": 1,
    "square kilometer km2": 10 ** 6,
    "square inch": 6.4516e-4,
    "square foot ft2": 0.09290304,
    "square yard yd2": 0.8361274,
    "square mile mi2": 2.589988e+6,
    "acre": 4046.86
  },
  mass: {
    "yoctogram yg": 10 ** -24,
    "zeptogram zg": 10 ** -21,
    "attogram ag": 10 ** -18,
    "femotogram fg": 10 ** -15,
    "picogram pg": 10 ** -12,
    "nanogram ng": 10 ** -9,
    "microgram µg": 10 ** -6,
    "milligram mg": 10 ** -3,
    "centigram cg": 10 ** -2,
    "decigram dg": 10 ** -1,
    "gram g": 1,
    "decagram dag": 10 ** 1,
    "hectogram hg": 10 ** 2,
    "kilogram kg": 10 ** 3,
    "megagram (tonne) Mg": 10 ** 6,
    "gigagram Gg": 10 ** 9,
    "teragram Tg": 10 ** 12,
    "petagram Pg": 10 ** 15,
    "exagram Eg": 10 ** 18,
    "zettagram Zg": 10 ** 21,
    "yottagram Yg": 10 ** 24,
    "ounce oz": 28.349523125,
    "pound lb": 453.59237,
    "imperial ton": 1.0160469088e+6
  },
  time: {
    "nanosecond ns": 10 ** -9,
    "microsecond µs": 10 ** -6,
    "millisecond ms": 10 ** -3,
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
};

const Main = () => {
  const [page, setPage] = React.useState("convert");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Title, {
    page: page,
    setPage: setPage
  }), page == "convert" && /*#__PURE__*/React.createElement(QCContainer, null), page == "reference" && /*#__PURE__*/React.createElement(Reference, null), page == "about" && /*#__PURE__*/React.createElement(About, null));
};

function Reference() {
  return /*#__PURE__*/React.createElement("div", {
    id: "reference-container",
    className: "content-container"
  }, /*#__PURE__*/React.createElement("p", null, "This Unit Converter uses the International System of Units (SI) to represent all other units and make conversions uniform and accurate. For example, the meter (m) is the standard unit of length, and it is used to represent all other units of length regardless of whether that unit is metric or not (take that Americans!).", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "All values in the table below are represented in terms of their category's standard unit of measurement (ex: length = meters)"), /*#__PURE__*/React.createElement("div", {
    className: "reference-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reference-item"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "reference-item-title"
  }, "Length (meters)"), /*#__PURE__*/React.createElement("p", {
    className: "left-col-p"
  }, "yoctometer ym", /*#__PURE__*/React.createElement("br", null), "zeptometer zm", /*#__PURE__*/React.createElement("br", null), "attometer am", /*#__PURE__*/React.createElement("br", null), "femtometer fm", /*#__PURE__*/React.createElement("br", null), "picometer pm", /*#__PURE__*/React.createElement("br", null), "nanometer nm", /*#__PURE__*/React.createElement("br", null), "micrometer \xB5m", /*#__PURE__*/React.createElement("br", null), "millimeter mm", /*#__PURE__*/React.createElement("br", null), "centimeter cm", /*#__PURE__*/React.createElement("br", null), "decimeter dm", /*#__PURE__*/React.createElement("br", null), "meter", /*#__PURE__*/React.createElement("br", null), "decameter dam", /*#__PURE__*/React.createElement("br", null), "hectometer hm", /*#__PURE__*/React.createElement("br", null), "kilometer km", /*#__PURE__*/React.createElement("br", null), "megameter Mm", /*#__PURE__*/React.createElement("br", null), "gigameter Gm", /*#__PURE__*/React.createElement("br", null), "terameter Tm", /*#__PURE__*/React.createElement("br", null), "petameter Pm", /*#__PURE__*/React.createElement("br", null), "exameter Em", /*#__PURE__*/React.createElement("br", null), "zettameter Zm", /*#__PURE__*/React.createElement("br", null), "yottameter Ym", /*#__PURE__*/React.createElement("br", null), "inch in", /*#__PURE__*/React.createElement("br", null), "foot ft", /*#__PURE__*/React.createElement("br", null), "yard yd", /*#__PURE__*/React.createElement("br", null), "mile mi"), /*#__PURE__*/React.createElement("p", null, "10**-24", /*#__PURE__*/React.createElement("br", null), "10**-21", /*#__PURE__*/React.createElement("br", null), "10**-18", /*#__PURE__*/React.createElement("br", null), "10**-15", /*#__PURE__*/React.createElement("br", null), "10**-12", /*#__PURE__*/React.createElement("br", null), "10**-9", /*#__PURE__*/React.createElement("br", null), "10**-6", /*#__PURE__*/React.createElement("br", null), "10**-3", /*#__PURE__*/React.createElement("br", null), "10**-2", /*#__PURE__*/React.createElement("br", null), "10**-1", /*#__PURE__*/React.createElement("br", null), "1", /*#__PURE__*/React.createElement("br", null), "10**1", /*#__PURE__*/React.createElement("br", null), "10**2", /*#__PURE__*/React.createElement("br", null), "10**3", /*#__PURE__*/React.createElement("br", null), "10**6", /*#__PURE__*/React.createElement("br", null), "10**9", /*#__PURE__*/React.createElement("br", null), "10**12", /*#__PURE__*/React.createElement("br", null), "10**15", /*#__PURE__*/React.createElement("br", null), "10**18", /*#__PURE__*/React.createElement("br", null), "10**21", /*#__PURE__*/React.createElement("br", null), "10**24", /*#__PURE__*/React.createElement("br", null), "0.0254", /*#__PURE__*/React.createElement("br", null), "0.3048", /*#__PURE__*/React.createElement("br", null), "0.9144", /*#__PURE__*/React.createElement("br", null), "1609.344")), /*#__PURE__*/React.createElement("div", {
    className: "reference-item"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "reference-item-title"
  }, "Area (square meters)"), /*#__PURE__*/React.createElement("p", {
    className: "left-col-p"
  }, "square millimeter mm2", /*#__PURE__*/React.createElement("br", null), "square centimeter cm2", /*#__PURE__*/React.createElement("br", null), "square decimeter dm2", /*#__PURE__*/React.createElement("br", null), "square meter m2", /*#__PURE__*/React.createElement("br", null), "square kilometer km2", /*#__PURE__*/React.createElement("br", null), "square inch", /*#__PURE__*/React.createElement("br", null), "square foot ft2", /*#__PURE__*/React.createElement("br", null), "square yard yd2", /*#__PURE__*/React.createElement("br", null), "square mile mi2", /*#__PURE__*/React.createElement("br", null), "acre"), /*#__PURE__*/React.createElement("p", null, "10**-6", /*#__PURE__*/React.createElement("br", null), "10**-4", /*#__PURE__*/React.createElement("br", null), "10**-2", /*#__PURE__*/React.createElement("br", null), "1", /*#__PURE__*/React.createElement("br", null), "10**6", /*#__PURE__*/React.createElement("br", null), "6.4516e-4", /*#__PURE__*/React.createElement("br", null), "0.09290304", /*#__PURE__*/React.createElement("br", null), "0.8361274", /*#__PURE__*/React.createElement("br", null), "2.589988e+6", /*#__PURE__*/React.createElement("br", null), "4046.86")), /*#__PURE__*/React.createElement("div", {
    className: "reference-item"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "reference-item-title"
  }, "Mass (grams)"), /*#__PURE__*/React.createElement("p", {
    className: "left-col-p"
  }, "yoctogram yg", /*#__PURE__*/React.createElement("br", null), "zeptogram zg", /*#__PURE__*/React.createElement("br", null), "attogram ag", /*#__PURE__*/React.createElement("br", null), "femotogram fg", /*#__PURE__*/React.createElement("br", null), "picogram pg", /*#__PURE__*/React.createElement("br", null), "nanogram ng", /*#__PURE__*/React.createElement("br", null), "microgram \xB5g", /*#__PURE__*/React.createElement("br", null), "milligram mg", /*#__PURE__*/React.createElement("br", null), "centigram cg", /*#__PURE__*/React.createElement("br", null), "decigram dg", /*#__PURE__*/React.createElement("br", null), "gram", /*#__PURE__*/React.createElement("br", null), "decagram dag", /*#__PURE__*/React.createElement("br", null), "hectogram hg", /*#__PURE__*/React.createElement("br", null), "kilogram kg", /*#__PURE__*/React.createElement("br", null), "megagram (tonne)", /*#__PURE__*/React.createElement("br", null), "gigagram Gg", /*#__PURE__*/React.createElement("br", null), "teragram Tg", /*#__PURE__*/React.createElement("br", null), "petagram Pg", /*#__PURE__*/React.createElement("br", null), "exagram Eg", /*#__PURE__*/React.createElement("br", null), "zettagram Zg", /*#__PURE__*/React.createElement("br", null), "yottagram Yg", /*#__PURE__*/React.createElement("br", null), "ounce oz", /*#__PURE__*/React.createElement("br", null), "pound lb", /*#__PURE__*/React.createElement("br", null), "imperial ton"), /*#__PURE__*/React.createElement("p", null, "10**-24", /*#__PURE__*/React.createElement("br", null), "10**-21", /*#__PURE__*/React.createElement("br", null), "10**-18", /*#__PURE__*/React.createElement("br", null), "10**-15", /*#__PURE__*/React.createElement("br", null), "10**-12", /*#__PURE__*/React.createElement("br", null), "10**-9", /*#__PURE__*/React.createElement("br", null), "10**-6", /*#__PURE__*/React.createElement("br", null), "10**-3", /*#__PURE__*/React.createElement("br", null), "10**-2", /*#__PURE__*/React.createElement("br", null), "10**-1", /*#__PURE__*/React.createElement("br", null), "1", /*#__PURE__*/React.createElement("br", null), "10**1", /*#__PURE__*/React.createElement("br", null), "10**2", /*#__PURE__*/React.createElement("br", null), "10**3", /*#__PURE__*/React.createElement("br", null), "10**6", /*#__PURE__*/React.createElement("br", null), "10**9", /*#__PURE__*/React.createElement("br", null), "10**12", /*#__PURE__*/React.createElement("br", null), "10**15", /*#__PURE__*/React.createElement("br", null), "10**18", /*#__PURE__*/React.createElement("br", null), "10**21", /*#__PURE__*/React.createElement("br", null), "10**24", /*#__PURE__*/React.createElement("br", null), "28.349523125", /*#__PURE__*/React.createElement("br", null), "453.59237", /*#__PURE__*/React.createElement("br", null), "1.0160469088e+6")), /*#__PURE__*/React.createElement("div", {
    className: "reference-item"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "reference-item-title"
  }, "Time (seconds)"), /*#__PURE__*/React.createElement("p", {
    className: "left-col-p"
  }, "nanosecond ns", /*#__PURE__*/React.createElement("br", null), "microsecond \xB5s", /*#__PURE__*/React.createElement("br", null), "millisecond ms", /*#__PURE__*/React.createElement("br", null), "second s", /*#__PURE__*/React.createElement("br", null), "minute m", /*#__PURE__*/React.createElement("br", null), "hour hr", /*#__PURE__*/React.createElement("br", null), "day", /*#__PURE__*/React.createElement("br", null), "week", /*#__PURE__*/React.createElement("br", null), "fortnight", /*#__PURE__*/React.createElement("br", null), "month", /*#__PURE__*/React.createElement("br", null), "year", /*#__PURE__*/React.createElement("br", null), "decade", /*#__PURE__*/React.createElement("br", null), "century", /*#__PURE__*/React.createElement("br", null), "millenium"), /*#__PURE__*/React.createElement("p", null, "10**-9", /*#__PURE__*/React.createElement("br", null), "10**-6", /*#__PURE__*/React.createElement("br", null), "10**-3", /*#__PURE__*/React.createElement("br", null), "1", /*#__PURE__*/React.createElement("br", null), "60", /*#__PURE__*/React.createElement("br", null), "3600", /*#__PURE__*/React.createElement("br", null), "86400", /*#__PURE__*/React.createElement("br", null), "604800", /*#__PURE__*/React.createElement("br", null), "1209600", /*#__PURE__*/React.createElement("br", null), "2629800", /*#__PURE__*/React.createElement("br", null), "31557600", /*#__PURE__*/React.createElement("br", null), "315576000", /*#__PURE__*/React.createElement("br", null), "315576e+4", /*#__PURE__*/React.createElement("br", null), "315576e+5"))), /*#__PURE__*/React.createElement("div", {
    className: "reference-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reference-item"
  }, /*#__PURE__*/React.createElement("h2", {
    classname: "reference-item-title"
  }, "Temperature (kelvin)"), /*#__PURE__*/React.createElement("p", {
    className: "left-col-p"
  }, "Celsius", /*#__PURE__*/React.createElement("br", null), "Kelvin", /*#__PURE__*/React.createElement("br", null), "Fahrenheit", /*#__PURE__*/React.createElement("br", null), "Rankine"), /*#__PURE__*/React.createElement("p", null, "-272.15", /*#__PURE__*/React.createElement("br", null), "1", /*#__PURE__*/React.createElement("br", null), "-457.87", /*#__PURE__*/React.createElement("br", null), "1.8"))));
}

function About() {
  return /*#__PURE__*/React.createElement("div", {
    className: "content-container"
  }, /*#__PURE__*/React.createElement("p", null, "This unit converter was made by me (Marcus Secu). That's about it. I can't really copyright the International System of Units, so I guess all I can say is I hope this converter helps you with whatever it is you need it to do.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "If you'd like to submit suggestions, ", /*#__PURE__*/React.createElement("a", {
    href: "https://discord.gg/f54k8RPMGU",
    target: "_blank"
  }, "join my Discord! :)")));
}

const Title = props => {
  return /*#__PURE__*/React.createElement("div", {
    id: "title"
  }, /*#__PURE__*/React.createElement("h1", null, "Units2Units"), /*#__PURE__*/React.createElement("button", {
    style: {
      backgroundColor: props.page == "convert" ? "rgb(50, 50, 50)" : "rgb(15, 15, 15)"
    },
    onClick: () => {
      props.setPage("convert");
    }
  }, "Convert"), /*#__PURE__*/React.createElement("button", {
    style: {
      backgroundColor: props.page == "reference" ? "rgb(50, 50, 50)" : "rgb(15, 15, 15)"
    },
    onClick: () => {
      props.setPage("reference");
    }
  }, "Reference"), /*#__PURE__*/React.createElement("button", {
    style: {
      backgroundColor: props.page == "about" ? "rgb(50, 50, 50)" : "rgb(15, 15, 15)"
    },
    onClick: () => {
      props.setPage("about");
    }
  }, "About"));
};

const QCContainer = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "content-container"
  }, /*#__PURE__*/React.createElement(QCPanel, null));
};

function handle_input(e, unitInfo, setUnits) {
  setUnits({
    "unit1Type": unitInfo.unit1Type,
    "unit1Amount": e.target.value == "." ? "." : e.target.value.replace(/[A-Za-z\c\s\x\O\\\|\/\?\'\"\;\:\]\}\[\{\}\,\<\>\!\@\#\$\%\Z^\&\*\(\)\_\=\+]*/g, ""),
    "unit2Type": unitInfo.unit2Type,
    "unit2Amount": unitInfo.unit2Amount
  });
}

const QCPanel = () => {
  const [unitCategory, setCategory] = React.useState();
  const [unitInfo, setUnits] = React.useState({
    "unit1Type": "",
    "unit1Amount": "",
    "unit2Type": "",
    "unit2Amount": ""
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "qc-panel"
  }, /*#__PURE__*/React.createElement(UnitCategories, {
    category: unitCategory,
    setCategory: setCategory,
    setUnits: setUnits
  }), /*#__PURE__*/React.createElement("div", {
    className: "user-fields"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexFlow: "column"
    }
  }, /*#__PURE__*/React.createElement("input", {
    maxLength: 64,
    value: unitInfo.unit1Amount,
    readOnly: unitInfo.unit1Type && unitInfo.unit2Type ? false : true,
    style: {
      borderColor: unitInfo.unit1Type && unitInfo.unit2Type ? "" : "transparent"
    },
    onChange: e => {
      handle_input(e, unitInfo, setUnits);
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      visibility: unitCategory && unitInfo.unit1Type && unitInfo.unit2Types ? "visible" : "hidden"
    }
  }, "="), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexFlow: "column"
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: "output",
    value: unitInfo.unit1Type && unitInfo.unit1Amount && unitInfo.unit2Type && Math.round(units[unitCategory][unitInfo.unit1Type] * unitInfo.unit1Amount / units[unitCategory][unitInfo.unit2Type] * 1000000) / 1000000 != NaN ? (Math.round(units[unitCategory][unitInfo.unit1Type] * unitInfo.unit1Amount / units[unitCategory][unitInfo.unit2Type] * 1000000) / 1000000).toString() : "",
    placeholder: unitInfo.unit1Type && unitInfo.unit2Type ? "Output" : "",
    maxLength: 64,
    style: {
      borderColor: unitInfo.unit1Type && unitInfo.unit2Type ? "" : "transparent"
    },
    readOnly: true
  }))), /*#__PURE__*/React.createElement(UnitDisplay, {
    unitInfo: unitInfo
  }), /*#__PURE__*/React.createElement(UnitSelector, {
    unitInfo: unitInfo,
    setUnits: setUnits,
    category: unitCategory
  }));
};

function resetUnits(func) {
  func({
    "unit1Type": "",
    "unit1Amount": "",
    "unit2Type": "",
    "unit2Amount": ""
  });
}

function UnitCategories(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "qc-categories"
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      filter: props.category == "length" ? "invert(100%)" : "invert(0%)"
    },
    onClick: () => {
      props.setCategory("length");
      resetUnits(props.setUnits);
    }
  }, "Length"), /*#__PURE__*/React.createElement("button", {
    style: {
      filter: props.category == "area" ? "invert(100%)" : "invert(0%)"
    },
    onClick: () => {
      props.setCategory("area");
      resetUnits(props.setUnits);
    }
  }, "Area"), /*#__PURE__*/React.createElement("button", {
    style: {
      filter: props.category == "mass" ? "invert(100%)" : "invert(0%)"
    },
    onClick: () => {
      props.setCategory("mass");
      resetUnits(props.setUnits);
    }
  }, "Mass"), /*#__PURE__*/React.createElement("button", {
    style: {
      filter: props.category == "time" ? "invert(100%)" : "invert(0%)"
    },
    onClick: () => {
      props.setCategory("time");
      resetUnits(props.setUnits);
    }
  }, "Time"), /*#__PURE__*/React.createElement("button", {
    style: {
      filter: props.category == "temperature" ? "invert(100%)" : "invert(0%)"
    },
    onClick: () => {
      props.setCategory("temperature");
      resetUnits(props.setUnits);
    }
  }, "Temperature"));
}

function UnitDisplay(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "unit-display"
  }, /*#__PURE__*/React.createElement("p", null, props.unitInfo.unit1Type), /*#__PURE__*/React.createElement("p", null, props.unitInfo.unit2Type));
}

function unit_change(e, props, unit) {
  props.setUnits({
    "unit1Type": unit == 1 ? e.target.textContent : props.unitInfo.unit1Type,
    "unit1Amount": props.unitInfo.unit1Amount,
    "unit2Type": unit == 2 ? e.target.textContent : props.unitInfo.unit2Type,
    "unit2Amount": props.unitInfo.unit2Amount
  });
}

const UnitSelector = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "unit-container"
  }, props.category && /*#__PURE__*/React.createElement("div", {
    className: "qc-unit-selection"
  }, (() => {
    return Object.keys(units[props.category]).map((item, index) => {
      return /*#__PURE__*/React.createElement("button", {
        key: index,
        onClick: e => {
          unit_change(e, props, 1);
        }
      }, item);
    });
  })()), props.category && /*#__PURE__*/React.createElement("div", {
    className: "qc-unit-selection"
  }, (() => {
    return Object.keys(units[props.category]).map((item, index) => {
      return /*#__PURE__*/React.createElement("button", {
        key: index,
        onClick: e => {
          unit_change(e, props, 2);
        }
      }, item);
    });
  })()));
};

const root = ReactDOM.createRoot(document.querySelector("#main"));
root.render( /*#__PURE__*/React.createElement(Main, null));