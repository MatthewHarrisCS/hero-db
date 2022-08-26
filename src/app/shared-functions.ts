/* converts names from the database into a form
    compatible as a URL parameter */
export function nameToUrl(name: String) {
    name = name.toLowerCase();
    name = name.replace(/(:)|(\!)|(\?)/g, "");
    name = name.replace(/(&)/g, "and");
    return name.replace(/( )/g, "_");
}