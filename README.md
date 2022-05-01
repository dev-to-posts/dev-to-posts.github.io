# Web Component listing all user DEV.to posts

This Web Components uses the DEV.to API to fetch all user posts.

source: [github](https://github.com/dev-to-posts/dev-to-posts.github.io)

## Load & define Web Component ``<dev-to-posts>``

```
<script src="https://dev-posts.github.io/element.js"></script>
```

* it does **not** matter _when_ or _how_ you load the component, all existing and new tags will automagically upgrade.

## Use Web Component ``<dev-to-posts>`` as HTML tag

```
<dev-to-posts name="YOUR-USERNAME"></dev-to-posts>
```

## Listing your articles on a DEV.to page

* Create a JSFiddle with the above code
* add Liquid code, with your own JSFiddle URI, to your DEV.to page:
{% raw %}
    <code>
    {% jsfiddle https://jsfiddle.net/YOUR-URI result %}
    </code>
{% endraw %}
* For all options, see: [DEV.to & Liquid JSFiddle](https://dev.to/link2twenty/changelog-jsfiddle-liquid-tags-now-live-1d1b)

## All Web Component ``<dev-to-posts>`` source code in [element.js](https://github.com/dev-to-posts/dev-to-posts.github.io/blob/main/element.js)

```javascript
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
                    `<div style="display:grid;grid:1fr/60px 60px 1fr">` +
                    `<span>${readable_publish_date}</span>`+
                    `<span>⭐ ${public_reactions_count}</span>` +
                    `<a href="${url}" target="_blank">${title.split("(")[0]}</a>` +
                    `</div>`
                )).join``) + 
            "</div>";
    }});
```

### LICENSE

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>

```