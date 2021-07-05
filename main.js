/* 
 todo obj หลักไว้สร้างผู้เล่น และมอนส์เตอร์
 todo มอนส์เตอร์เป็น obj เก็บไว้ใน arr เอาไว้สุ่ม
 todo ต่อสู้กันเทียบ hp -= atk - def, spd วัดว่าใครได้เริ่มก่อน
 todo แสดงผลสุดท้ายเป็น your encounter with monster.name you take X Dmg and you win/lose
 todo สุ่มสู้ไปเรื่อยๆจนกว่าผู้เล่นจะ hp=0 แล้วบอกจำนวนมอนที่ฆ่าได้ว่ากี่ตัว
*/

const creatorIncubator = (creatureName) =>{
    let hp = Math.round((Math.random()*creatureName[1])+1)
    let atk = Math.round((Math.random()*creatureName[1])+1)
    let def = Math.round((Math.random()*creatureName[1])+1)
    let spd = Math.round((Math.random()*creatureName[1])+1)

    return{
        creatureName: creatureName[0],
        hp: hp,
        atk: atk,
        def: def,
        spd: spd,

        attacked (target){
            if(target.atk > this.def){
                return this.hp -= target.atk - this.def
            }else{
                return console.log(`${target.creatureName} can't do any damaged`)
            }
        },
        get status (){
            console.log(`\nChallenger name: ${this.creatureName}`)
            console.log(`HP = ${this.hp}`)
            console.log(`ATK = ${this.atk}`)
            console.log(`DEF = ${this.def}`)
            console.log(`SPD = ${this.spd}`)
        }
    }
}

const battle = (firstTarget, secondTarget) => {
    firstHp = firstTarget.hp
    secondHp = secondTarget.hp
    if(firstTarget.spd >= secondTarget.spd) {
        console.log(secondTarget.creatureName + ' was attacked');
        firstTarget.attacked(secondTarget)
        secondTarget.attacked(firstTarget)
        console.log(`${firstTarget.creatureName} have ${firstTarget.hp} HP left`);
        console.log(`${secondTarget.creatureName} have ${secondTarget.hp} HP left`);
        return secondHp
    }else{
        console.log(firstTarget.creatureName + ' was attacked');
        firstTarget.attacked(secondTarget)
        secondTarget.attacked(firstTarget)
        console.log(`${firstTarget.creatureName} have ${firstTarget.hp} HP left`);
        console.log(`${secondTarget.creatureName} have ${secondTarget.hp} HP left`);
        return firstHp
    }
}
let playersList = [['Paladin', 6], ['Assassin', 8], ['Mage', 7]]
let monstersList = [['Slime', 3], ['Wolf', 4], ['Golem', 7], ['Vampire', 6], ['Goblin', 4], ['Orc', 7]];
let turn = 100;
playerGenerator = Math.floor(Math.random()*playersList.length)
monsterGenerator = Math.floor(Math.random()*monstersList.length)
player = creatorIncubator(playersList[playerGenerator]);
monster = creatorIncubator(monstersList[monsterGenerator]);
player.status;
monster.status;

for(let i=0; i<turn; i++){
    if((player.atk <= monster.def) && (monster.atk <= player.def)){
        break;
    }else if((player.hp > 0) && (monster.hp > 0)) {
        battle(player, monster)
    }else{
        break;
    }
}



if((player.hp <= 0) || (monster.hp > player.hp)){
    console.log('\nYou lose')
} else if((monster.hp <=0) || (monster.hp < player.hp)) {
    console.log('\nYou win')
}else{
    console.log('\nDraw')
}

