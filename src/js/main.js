import def from './services/default'
import acord from './modules/acord'
import mouse from './own/mouse'
import value from './own/value'

window.onload = function (){
    def();
    acord();
    mouse();
    value();
}