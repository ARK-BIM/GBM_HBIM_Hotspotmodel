function signalTestComplete() {
    const div = document.createElement("div");
    div.id = "percyLoaded";
    document.body.appendChild(div);
}

function getRequestParams() {
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
        vars[key] = value;
    });
    return vars;
}

export {signalTestComplete, getRequestParams};