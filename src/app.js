//Module 6 User Interface Classes

import {Button} from './ui/button.js';
import {Image} from './ui/image.js';

let b = new Button('Click Me');
b.appendToElement($('body'));

let i = new Image('images/22inf.jpg');
i.appendToElement($('body'));