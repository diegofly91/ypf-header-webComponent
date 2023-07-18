class YpfHeader extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
  
      this.shadowRoot.innerHTML = `
        <style>
        :host  {
            --header-hgt: 55px;
            --white: #ffffff;
            --bg-header: #f1f1f1;
            --color-primary: #005DA7;
            width: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            height: var(--header-hgt);
            background-color: var(--bg-header);
        }
        
        body {
            padding-top: var(--header-hgt);
        }
        
        * {
            font-weight: normal;
            line-height: 18px;
            padding: 0;
            margin: 0;
        }
        
        ypf-header {
           
        }
        
        nav  a {
            text-decoration: none;
            font-size: 11px;
            color: #838383;
        }
        
        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            font-weight: 600;
        }
        
        nav {
            display: flex;
            justify-content: center;
            align-items: center;  
            width: 100%;
            transition: all 0.5s ease;
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            max-width: 1080px;
        }
        
        nav .logo,
        nav .logo a img{
            width: 100px;
            margin-left: 5px;
            flex-grow: 1;
            height: auto;
            display: flex;
            align-items: start;
            justify-content: start;
        }
        #seccions > li.seccion > .submenu.sitios li h3 {
            font-weight: 500;
            background: url('https://www.ypf.com/_layouts/YPF.Portals.HeaderFooter/css/assets/head-foot/icons-sitios-ypf.png') no-repeat scroll left -36px;
            display: inline-block;
            padding-left: 25px;
         }
         
        /*  Header  */
        
        @media only screen and (min-width: 920px) {
        
        #seccions {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            cursor: pointer;
            height: var(--header-hgt);
        }
        
        a:hover,
        a.Negrita:hover h3,
        #seccions > li:hover  h2 {
            color: #0063be !important;
        }
        
        #seccions > li > a h3,
        #seccions > li > h2 {
            display: block;
            font-size: 12px;
            font-weight: 500;
            text-transform: none;
            margin: 0 10px;
            color: #000;
        }
        
        #seccions > li > .imgBoton {
            border-left: 1px solid #cbcbcb;
            border-right: 1px solid #cbcbcb;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 5px;
        }
        #seccions > li > .imgBoton h2 {
            display: none;
        }
        li a h3 {
            margin: 5px 0;
        }
        
        a.Negrita h3 {
            color: #000;
            font-weight: 700;
        }
        
        a.Destacado,
        a.Destacado h3 {
            text-transform: uppercase;
            font-weight: 800;
            color: var(--color-primary);
            font-size: 12px;
        }
        
        #seccions > li {
            position: relative;
            z-index: 10;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-grow: auto;
            order: auto;
        }
        
        #seccions > li:not(.logo):hover {
            border-top: 3px solid var(--color-primary);
        }
        
        #seccions > li > div,
        #seccions > li.seccion .submenu {
            display: none;
            opacity: 0;
            width: auto;
        }
        #seccions > li.seccion .submenu  ul {
          margin: 20px;
        }
        
        #seccions > li:hover > div,
        #seccions > li.seccion:hover  > .submenu {
            display: flex;
            max-height: 700px;
            position: absolute;
            top: calc(var(--header-hgt) - 1px);
            left: 0;
            z-index: 1;
            opacity: 1;
            background-color: #f1f1f1;
        }
        #seccions > li.seccion:hover  > .submenu.sitios {
            flex-direction: column-reverse;
        }
        #seccions > li.seccion  > .submenu.sitios li {
            padding-left: 20px;
            text-transform: uppercase;
            font-size: 14px;
        }
        
        #seccions > li:nth-child(n+3):hover  > .submenu {
           transform: translateX(-50%);
        }
        #seccions > li.boton > div,
        #seccions > li:last-child:hover  > .submenu {
            transform: translateX(-80%);
        }
        #seccions > li:last-child  > h2.Destacado {
           color: var(--color-primary);
        }
        #seccions > li.seccion:last-child  > .submenu {
            flex-direction: column;
        }
        
        #seccions > li > div,
        #seccions > li.seccion  > .submenu > li,
        #seccions > li.seccion  > .submenu > div {
            min-width: 218px;
        }
        
        #seccions > li  .col {
            padding-bottom: 20px;
        }
        #seccions > li.seccion:last-child  > .submenu > div {
            height: 100%;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        
        .seccion .submenu .info {
            flex-grow: 1;
            height: auto;
            margin: 0;
            padding: 0;
            right: 0;
            text-align: center;
            width: 305px;
            color: #cfcfcf;
            background: #333;
        }
        
        .seccion .submenu .info img {
            width: 100%;
            height: auto;
            display: block;
        }
        
        .seccion .submenu .info strong {
            color: #cfcfcf;
            margin-top: 10px;
            text-align: center;
            text-transform: uppercase;
            font-weight: 400;
            padding: 0;
            font-size: 12px;
            display: block;
        }
        
        .seccion .submenu .info p {
            line-height: 14px;
            margin-top: 10px;
            padding: 0 10px 20px 10px;
            text-align: center;
            font-size: 12px;
            color: #cfcfcf;
        }
        
        #seccions > li > .imgBoton  div li {
           display: flex;
           flex-direction: wrap;
            justify-content: center;
        }
        #seccions > li > div .box {
           display: flex;
           justify-content: center;
           align-items: center;
           padding: 10px;
           row-gap: 10px;
           column-gap: 10px;
        }
        #seccions > li > div .box  li {
            padding: 5px;
        }
        #seccions > li > div .box  li a {
            font-size: 12px;
        }
        }
        @media only screen and (max-width: 920px) {
            nav {
                height: var(--header-hgt);
                position: relative;
            }
        
            nav #seccions .info,
            nav #seccions > li > div,
            nav #seccions img {
                display: none;
            }
        
            nav  .logo,
            nav  .logo a img{
                width: 80px;
            }
            
            nav .openmenu {
                display: block;
                width: 44px;
                height: 34px;
                background: url('https://www.ypf.com/_layouts/YPF.Portals.HeaderFooter/css/assets/head-foot/open-menu.png') no-repeat center center;
                cursor: pointer;
            }
        
            nav #seccions {
               display: none;
               transition: all 0.5s ease;
            }

            nav #seccions.open {
                height: calc(100vh - var(--header-hgt));
                bottom: 0;
                overflow: hidden auto;
                position: fixed;
                top: var(--header-hgt);
                background: white;
                width: 100%;
                cursor: pointer;
                display: block;
            }
            nav #seccions > li {
                padding-left: 10px;
                position: relative;
            }
            nav #seccions > li.more::before {
                  position: absolute;
                  right: 0;
                  top: 0;
                  font-size: 15px;
                  font-weight: 800;
                  content: "";
                  background: url('https://www.ypf.com/_layouts/YPF.Portals.HeaderFooter/css/assets/head-foot/dropdown_menu_arrows.png') no-repeat center center;
                  z-index: -1;
                  transform: rotate(90deg);
                  width: 50px;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
            }
        
            nav #seccions > li > a h3,
            nav #seccions > li > h2 {
                font-size: 12px;
                font-weight: 800;
                padding: 10px;
                color: var(--color-primary);
                border-bottom: solid 1px #ccc;
                cursor: pointer;
            }
        
            nav #seccions > li > .imgBoton h2 {
                text-transform: uppercase;
                font-size: 12px;
                font-weight: 800;
                padding: 10px;
                color: var(--color-primary);
                border-bottom: solid 1px #dcdcdc;
                cursor: pointer;
            }
            nav #seccions > li.open {
                background: #e3e2e2;
            }
            nav #seccions > li.open > div,
            nav #seccions > li.open .submenu {
                display: block;
                background: #ececec;
            }
        
            nav #seccions > li div li a.Destacado {
                text-transform: uppercase;
                color: var(--color-primary);
                font-size: 11px;
                font-weight: 500;
                padding-left: 0;
                transform : translateX(-15px)
            }
        
            nav #seccions > li.open .Negrita {
                color: #000;
                transform: translateX(-5px);
            }
            nav #seccions > li.open li a:hover {
                color: var(--color-primary);
            }
            nav #seccions > li.open div  li{
                border-bottom:1px solid #dcdcdc;
                padding-left: 25px;
                height: 40px;
                display: flex;
                justify-content: flex-start;
                align-items: center;
        
            }
            
            nav #seccions > li.open li a {
                font-size: 11px;
                font-weight: normal;
                color: #787c88;
            }
        }
        /* Footer  */
        </style>
        
        <nav>
          <span class="openmenu"></span>
          <ul id="seccions"></ul>
        </nav>
      `;
    }
  
    async connectedCallback() {
      await this.fetchData();
      const links = this.shadowRoot.querySelectorAll('.link');
      links.forEach((link) => {
        link.addEventListener('mouseover', this.handleMouseOver);
      });
      const naveg = this.shadowRoot.querySelector('nav'); 
      naveg.addEventListener('click', this.handleClick);
    }
  
    disconnectedCallback() {
      this.removeEventListener('mouseover', this.handleMouseOver);
      this.removeEventListener('click', this.handleClick);
    }

    typeMetadata = {
        seccion: { start: "li" },
        boton: { start: "li" },
        col: { start: "div" },
        grupo: { start: "ul" },
        link: { start: "li" },
        default: { start: "li" },
        childrens: { start: "ul" },
        logo: { start: "div" },
    };
    
    async fetchData() {
      const endpoint = 'https://magdesa.ypf.com/shp/yforms-lists/metadata/';
      const graphql = JSON.stringify({
        query: `query getGroupMetadataByPrefixes($prefixes: [String!]!) {
          getGroupMetadataByPrefixes(prefixs: $prefixes) {
            title
            items {
              title
              data
            }
          }
        }`,
        variables: { prefixes: ['YPFcom - Header'] },
      });
  
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: graphql,
      };
  
      try {
        const response = await fetch(endpoint, requestOptions);
        const result = await response.json();
        const { getGroupMetadataByPrefixes } = result.data;
        this.processMetadata(getGroupMetadataByPrefixes);
      } catch (error) {
        console.error(error);
      }
    }
  
    processMetadata(getGroupMetadataByPrefixes) {
      const seccions = this.shadowRoot.getElementById('seccions');
  
      getGroupMetadataByPrefixes.forEach((data) => {
        data.items.forEach((node1) => {
          node1.data.forEach((node2) => {
            const element = this.createHeaderElement(node2);
            seccions.appendChild(element);
          });
        });
      });
      const logo = seccions.querySelector(".logo");
      let naveg = this.shadowRoot.querySelector("nav");
      naveg.insertBefore(logo,  naveg.childNodes[0]);
    }
  
    createHeaderElement({ text, props, type, children }) {
      let element = type
      ? document.createElement(this.typeMetadata[type].start)
      : document.createElement("ul");
    element.className = type;
   
    if(!type && props.url && children.length === 0) {
      element = document.createElement("li");
      const linkElement = document.createElement("a");
      element.dataset.image = props.urlImage;
      const h3 = document.createElement("h3");
      linkElement.href = props.url;
      h3.textContent = text;
      linkElement.appendChild(h3);
      linkElement.className = props.style;
      element.appendChild(linkElement);
      return element;
    }
    // si es un link o un default y no tiene hijos
    if ((type === "link" || type === "default") && children.length === 0 ) {
      const linkElement = document.createElement("a");
      element.dataset.image = props.urlImage;
      const h3 = document.createElement("h3");
      linkElement.href = props.url;
      h3.textContent = text;
      linkElement.appendChild(h3);
      linkElement.className = props.style;
      element.appendChild(linkElement);
    }
  
    // si es un link o un default y tiene hijos
    if (type === "logo") {
      const linkElement = document.createElement("a");
      linkElement.href = props.url;
      const img = document.createElement("img");
      img.src = props.urlImage;
      img.alt = props.altImage;
      linkElement.appendChild(img);
      element.appendChild(linkElement);
    }
  
    //si es type boton agregamos la imagen
    if (type === "boton") {
      element.className = children.length > 0 ? element.className +" more" : element.className;
      const linkElement = document.createElement("a");
      linkElement.className = "imgBoton";
      const h2 = document.createElement("h2");
      h2.textContent = props.alt || text;
      const img = document.createElement("img");
      linkElement.href = props.url;
      linkElement.alt = props.alt;
      img.src = props.urlImage;
      img.alt = props.altImage;
      linkElement.appendChild(img);
      linkElement.appendChild(h2);
      element.appendChild(linkElement);
    }
  
    // si es type seccion agregamos el titulo
    if (type === "seccion") {
      const titleElement = document.createElement("h2");
      titleElement.textContent = props.title;
      element.appendChild(titleElement);
    }
  
    //si es typo link y tiene hijos le agregamos la imagen
    if (type === "link" && children.length > 0 && props.urlImage !== "") {
      //
      const element = document.createElement("div");
      element.className = "box";
      const img = document.createElement("img");
      img.src = props.urlImage;
      img.alt = props.altImage;
      element.appendChild(img);
  
      const ul = document.createElement("ul");
      let li = document.createElement("li");
      let linkElement = document.createElement("a");
      linkElement.href = props.url;
      linkElement.textContent = text;
      linkElement.className = props.style;
      li.appendChild(linkElement);
      ul.appendChild(li);
      children.forEach((child) => {
        const childLi = document.createElement("li");
        const linkElementLi = document.createElement("a");
        linkElementLi.href = child.props.url;
        linkElementLi.textContent = child.text;
        linkElementLi.className = child.props.style;
        childLi.appendChild(linkElementLi);
        ul.appendChild(childLi);
      });
      element.appendChild(img);
      element.appendChild(ul);
      return element;
    }
  
    // si tiene hijos
    if (children.length > 0) {
      let childElement = document.createElement("div");
      let ul = document.createElement("ul");
      if (type === "seccion") {
        element.className = element.className +" more";
        childElement.className =
          props.urlImage !== "" ? "submenu" : "submenu sitios";
        element.querySelector("h2").className = "Destacado";
      }
      children.forEach((child) => {
        if (childElement.className === "submenu sitios") {
          ul.appendChild(this.createHeaderElement(child));
        } else {
          childElement.appendChild(this.createHeaderElement(child));
        }
      });
      if (ul.children.length > 0) {
        childElement.appendChild(ul);
        element.appendChild(childElement);
      } else {
        element.appendChild(childElement);
      }
    }
  
    // si es type seccion y tiene imagen agregamos div.info con la imagen
    if (type === "seccion") {
      const endElement = document.createElement("div");
      endElement.className = "info";
      const imgElement = document.createElement("img");
      imgElement.src = props.urlImage;
      imgElement.alt = props.altImage;
      if (props.urlImage !== "") {
        const strongElement = document.createElement("strong");
        strongElement.textContent = props.titleImage;
        const pElement = document.createElement("p");
        pElement.textContent = props.descriptionImage;
        endElement.appendChild(imgElement);
        endElement.appendChild(strongElement);
        endElement.appendChild(pElement);
      } else {
        const imgSelect = element.querySelectorAll(".sitios ul li")[0];
        imgElement.src = imgSelect.dataset.image;
        endElement.appendChild(imgElement);
      }
      element.querySelector(".submenu").appendChild(endElement);
    }
    return element;
    }
  
    handleMouseOver(e) {
        e.preventDefault();
      if (e.target.className === 'link' && e.target.dataset.image !== '') {
        const parent = e.target.parentElement.parentElement;
        const img = parent.querySelector('.info img')
        img.src = e.target.dataset.image;
      }
    }
  
    handleClick(e) {
      e.preventDefault();
      const parent = e.target.parentElement;
      
      if (window.innerWidth < 920 && parent.classList.contains('seccion')) {
        parent.classList.toggle('open');
        return;
      }
  
      if (window.innerWidth < 920 && e.target.className === 'openmenu') {
        const submenu = parent.querySelector('#seccions');
        submenu.classList.toggle('open');
        return;
      }
  
      if (window.innerWidth < 920 && parent.classList.contains('imgBoton') && parent.parentElement.querySelectorAll('li').length > 0) {
        parent.parentElement.classList.toggle('open');
        return;
      }
  
      if (e.target.href !== undefined || parent.href !== undefined) {
        window.open(e.target.href || parent.href, '_blank');
      }
    }

  }
  
  customElements.define('ypf-header', YpfHeader);
  