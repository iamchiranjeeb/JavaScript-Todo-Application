var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);


function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textNode = document.createTextNode(item);

    if (item === '') {
        document.getElementById('msg').innerHTML = "Please add a Todo";
        alert('Please Add a Todo');
    } else {
        // Create li
        li = document.createElement('li');
        //create Check Box
        var checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.setAttribute('id', 'check');
        // Create Label
        var label = document.createElement('label');
        // Add These Elements on web page
        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual';
        }, 1 * 1000);
        input.value = '';
    }


}


function removeItem() {
    li = ul.children;

    if (li.length === 0) {
        console.log('Nothing To Remove');
        document.getElementById('msg1').innerHTML = "Nothing to Remove";
        alert('Nothing to remove')
    } else {
        for (let index = 0; index < li.length; index++) {
            const element = li[index]
            console.log(element);
            while (li[index] && li[index].children[0].checked) {
                ul.removeChild(li[index])
            }
        }
    }
}