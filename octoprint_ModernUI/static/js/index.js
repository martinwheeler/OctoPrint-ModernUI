// Allow mobile responsiveness so that the page isn't loaded in desktop mode
const mobileMetaTag = document.createElement("meta");
mobileMetaTag.name = "viewport";
mobileMetaTag.content =
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
document.getElementsByTagName("head")[0].appendChild(mobileMetaTag);
