'use strict';

const contador = {
    val_max: 100,
    val_min: 0,
    val_act: 0,
    val_ini: 0,
    aumentar: () => {
        this.val_act < this.val_max
        ? this.val_act = this.val_act++
        : this.val_act = this.val_act
    },
    disminuir: () => {
        this.val_act > this.val_min
        ?this. val_act = this.val_act--
        : this.val_act = this.val_act
    },
    restablecer: () => {
        this.val_act = this.val_ini;
    }
}

console.log(contador.aumentar);
console.log(contador.val_act);
console.log(contador.aumentar);
console.log(contador.val_act);
console.log(contador.disminuir);
console.log(contador.val_act);
console.log(contador.aumentar);
console.log(contador.val_act);
console.log(contador.restablecer);
console.log(contador.val_act);