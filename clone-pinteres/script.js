const grids=document.querySelectorAll('.grid')
const heading=document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index){
    const grid= grids[index]
    const heading= headings[index]
    const gridColumns= grid.querySelectorAll('.column')
    
    grid.classList.add('action')

    gridColumns.forEach(element =>{
        element.classList.remove('animate-before')
    })
}
function exitScreen(index, exitDelay){}

function setupAnimationCycle({initialScreenIndex, timePerScreen, exitDelay}){

}

setupAnimationCycle ({
    initialScreenIndex:0,
    timePerScreen:2000,
    exitDelay:200*7
})