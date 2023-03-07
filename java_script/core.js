const btnSubmit = document.querySelector('.btn-submit');
const CommentsWrapper = document.querySelector('.keep');
const inpName = document.querySelector('.user-name-inp');
const inpComm = document.querySelector('.user-comm-inp');
const mainWrapper = document.querySelector('.main-container')
const commentCounts = document.querySelector('.counts-comm');
const res = document.querySelector('#res');
let counter = 0;

setInterval(() => {
    commentCounts.textContent = `${CommentsWrapper.children.length} Comments`;
}, 1);

document.querySelector('#clear-comm').addEventListener('click', () => {
    for (let i = 1; i <= 1000; i++) {
        localStorage.removeItem(`user${i}`);
        const commAll = document.querySelectorAll('.comm')
        commAll.forEach(item => {
            item.remove()
        })
    }
    counter = 0;
})

function appear() {
    for (let i = 1; i <= localStorage.length; i++) {
        const user = localStorage.getItem(`user${i}`);
        const userParse = JSON.parse(user);
        const example = `<div class="comm">
                            <div class="picture">
                                <img src="assets/images/Sample_User_Icon.png">
                            </div>
                            <div><p>${userParse.name}</p></div>
                            <div><p>${userParse.comm}</p></div>
                        </div>`;
        CommentsWrapper.insertAdjacentHTML('beforeend', example)
    }
}; appear();

btnSubmit.addEventListener('click', () => {
    if (inpName.value === '' || inpComm.value === '') {
        res.textContent = 'Write something!';
        return;
    }

    res.textContent = '';
    counter++;
    const userObj = {
        name: inpName.value,
        comm: inpComm.value,
        id: counter,
    }; const objStringfy1 = JSON.stringify(userObj);
    localStorage.setItem(`user${counter}`, objStringfy1);

    const user = localStorage.getItem(`user${counter}`);
    const userParse = JSON.parse(user);
    const example = `<div class="comm">
                        <div class="picture">
                            <img src="assets/images/Sample_User_Icon.png">
                        </div>
                        <div><p>${userParse.name}</p></div>
                        <div><p>${userParse.comm}</p></div>
                    </div>`;
    CommentsWrapper.insertAdjacentHTML('afterbegin', example)
    inpName.value = '';
    inpComm.value = '';
});