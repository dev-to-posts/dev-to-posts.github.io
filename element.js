// read dev.to API, list user="..." articles
customElements.define( "dev-to-posts",
class extends HTMLElement {
async connectedCallback(
    user = this.getAttribute("user"),
    uri = `//dev.to/api/articles?state=all&username=${user}`,
) {
    let json = await (await fetch(uri, {mode: "cors"})).json();
    this.innerHTML = 
        `<div style="font:15px arial;background:beige">` +
        `<b>${user} DEV.to posts:</b>` +
            (json.map(
            ({title, readable_publish_date, url, public_reactions_count}) => (
                `<div style="display:grid;grid:1fr/80px 50px 1fr">` +
                  `<span>${readable_publish_date}</span>`+
                  `<span>⭐ ${public_reactions_count}</span>` +
                  `<a href="${url}" target="_blank">${title.split("(")[0]}</a>` +
                `</div>`
            )).join``) + 
        "</div>";
}});
