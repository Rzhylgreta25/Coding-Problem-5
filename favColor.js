function colors(){
    let favcolor = [];


for (let i = 0; i < 3; i++) {
    let entercolor = prompt(`Enter your favorite color #${i + 1}:`);
    favcolor.push(entercolor); 
    }
    console.log(`Updated color list: ${entercolor}`);
}
