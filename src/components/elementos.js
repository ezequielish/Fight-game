class Elementos{

    elementCreate(element,attr,styles){
        const $elementHtml = document.createElement(element);
  
        for (const key in attr) {
            if (attr.hasOwnProperty(key)) {
                let attributes = attr[key];
                $elementHtml.setAttribute(key,attributes)
            }
        }
        styles?$elementHtml.setAttribute('style', styles.style):null
        return $elementHtml;
    }

    createTemplate(HTMLString) {
        const html = document.implementation.createHTMLDocument();
        html.body.innerHTML = HTMLString;
        return html.body.children[0];
      }
}

export default Elementos;