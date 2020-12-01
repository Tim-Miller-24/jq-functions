function $(selector) {
    let element;
    if (typeof selector == 'string') {
        element = document.querySelectorAll(selector);
    } else if (selector instanceof HTMLElement) {
        element = [selector];
    } else {
        element = null;
    }

    return new JQ(element)
}

/* 
Вашим домашним заданием будет сделать методы которые будут удалять и добавлять классы (addClass, removeClass). Также сделать методы которые будут изменять ширину и высоту элементов, при этом если вы получаете просто число, то сами добавляете “px”, а если получаете строку, то просто передаете для ширины, но если вы ничего не получаете, то возвращаете ширину или высоту первого элемента. (height, width)
*/

function JQ(params) {
    this.element = params;

    this.on = function (event, callBackFunction) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callBackFunction);
        }

        return this;
    }

    this.html = function (htmlText) {
        if (typeof htmlText == 'string' || typeof htmlText == 'number') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].innerHTML = htmlText;
            }
        }

        return this;
    }

    this.css = function (styleName, value) {
        if (typeof styleName == 'string' && (typeof value == 'string' || typeof value == 'number')) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style = `${styleName}: ${value};`;
            }
        } else if (typeof styleName == 'object' && styleName !== null && !Array.isArray(styleName)) {
            for (let i = 0; i < this.element.length; i++) {
                for (const key in styleName) {
                    this.element[i].style[key] = styleName[key];
                }
            }
        }

        return this;
    }

    this.toggleClass = function (nameClass) {
        if (typeof nameClass == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(nameClass)) {
                    this.element[i].classList.remove(nameClass);
                } else {
                    this.element[i].classList.add(nameClass);
                }
            }            
        }

        return this;
    }

    this.hover = function (mouseOverFuns, mouseOutFunc) {
        if (typeof mouseOverFuns == 'function' && typeof mouseOutFunc == 'function') {
            this.on('mouseover', mouseOverFuns);
            this.on('mouseout', mouseOutFunc);        
        }

        return this;
    }

    this.addClass = function (classForAdd) {
        if (typeof classForAdd == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.add(classForAdd);
            }
        }

        return this;
    }

    this.removeClass = function (classForRemove) {
        if (typeof classForRemove == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.remove(classForRemove);
            }
        }

        return this;
    }

    this.changeWidth = function (userWidth) {
        if (typeof userWidth == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = userWidth;
            }
        } else if (typeof userWidth == 'number') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = userWidth + 'px';
            }
        } else {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = this.element[i].clientWidth
            }
        }

        return this;
    }

    this.changeHeight = function (userHeight) {
        if (typeof userHeight == 'string') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = userHeight;
            }
        } else if (typeof userHeight == 'number') {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = userHeight + 'px';
            }
        } else {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = this.element[i].clientHeight
            }
        }

        return this;
    }
}

