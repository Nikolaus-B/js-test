const div = document.querySelector('.outerCircle');

div.addEventListener('click', onDivClick);

function onDivClick(e) {
    const item = e.currentTarget;
    if (item.style.position === 'absolute') {
        window.removeEventListener('mousemove', onMouseMove);
        item.style.position = 'static';
        return;
    }
    item.style.position = 'absolute';

    window.addEventListener('mousemove', onMouseMove);
}

function onMouseMove(e) {
    // console.log(e);
    // console.log(e.pageX);
    // console.log(e.pageY);

    let top = e.pageY;
    let left = e.pageX;

    div.style.top = `${top - 15}px`;
    div.style.left = `${left - 15}px`;
}
