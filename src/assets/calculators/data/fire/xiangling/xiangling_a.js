import { rowsAir, tablePhysical } from "../../../utils";
import { getAttribute } from "@util/attribute";


const rowsA = [
    {
        key: "dmg1",
        chs: "普攻1段",
    },
    {
        key: "dmg2",
        chs: "普攻2段",
    },
    {
        key: "dmg31",
        chs: "普攻3段-1",
    },
    {
        key: "dmg32",
        chs: "普攻3段-2",
    },
    {
        key: "dmg4",
        chs: "普攻4段/4",
    },
    {
        key: "dmg5",
        chs: "普攻5段",
    },
];

const rowsB = [
    {
        key: "bDmg1",
        chs: "重击伤害",
    },
]

export default function (artifacts, configObject, enemy) {
    let c = configObject.character;
    let w = configObject.weapon;
    let attribute = getAttribute(artifacts, c, w, configObject.buffs);

    let a = tablePhysical(attribute, configObject, enemy, rowsA, "a");
    let b = tablePhysical(attribute, configObject, enemy, rowsB, "b");
    let air = tablePhysical(attribute, configObject, enemy, rowsAir, "air");

    return {
        a, b, air
    }
}