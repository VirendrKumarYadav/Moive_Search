let add_btns;
let addBoard = document.querySelector('.add_board');
addBoard.addEventListener('click', () => {
    createForm(addBoard.children[0]);
    add_btns = document.querySelectorAll('.add_btn');
    add_btn();
    // boardName();
});
// Add Form

let form_innerHtml = `
 <input type="text" class="custom-input-value" id="boardName" placeholder="Enter Card Name">
 <div class="custom-input-foot">
  <button class="add_btn"type="submit">Add</button>
  <p class="close">X</p>
  </div>`;
let board = document.querySelector('.board');
function createForm(child) {
    let div = document.createElement('div');
    div.classList.add('add_board');
    let form = document.createElement('div');
    form.classList.add('custom-input');
    form.innerHTML = form_innerHtml;
    addBoard.remove();
    div.appendChild(form);
    board.appendChild(div);
    boardName();
}

let text = "";


// create new board
let enteredBoardName;
function boardName() {
    let inText = document.querySelectorAll('.custom-input-value');
    inText.forEach((ele, idx) => {
        ele.addEventListener('keyup', debounce(function () {
            enteredBoardName = ele.value;
            console.log(ele.value);
        }, 1000));
    });
}
let enteredCardName;
function cardName() {
    let inText = document.querySelectorAll('.cardName');
    inText.forEach((ele, idx) => {
        ele.addEventListener('keyup', debounce(function () {
            enteredCardName = ele.value;
            console.log(ele.value);
        }, 1000));
    });
}
const debounce = (func, delay) => {
    let debounceTimer
    return function () {
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer
            = setTimeout(() => func.apply(context, args), delay);
    }
}

// on clk on Add
add_btns = document.querySelectorAll('.add_btn');
// console.log(add_btns);
add_btn();
function add_btn() {
    add_btns = document.querySelectorAll('.add_btn');
    add_btns.forEach((ele, idx) => {
        add_btns[idx].addEventListener('click', submitForm)
    });

    function submitForm() {
        setTimeout(createNewBoard(), 2000);
        console.log("create board called");
        addingForm();
        deleteBoard();
        deleteCard();
    }
}
// add board
let countCard = 0;
let container=document.querySelector('.container');
function createNewBoard() {
    let board = document.createElement('div');
    board.classList.add('board');
    let boardin = document.createElement('div');
    boardin.classList.add('board-in');
    let addBoard_ele = document.querySelector('.add_board');
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    div.classList.add('board-head');
    div.innerHTML = `<p class="board-card-title">${enteredBoardName} <span class="count">${countCard}</span></p>
                              <div class="board-more-btn">...
                              <button class="delete-btn board_delete_btn">Delete Board</button>
                              </div>     
                              `;
    addBoard_ele.children[0].remove();
    div1.classList.add('custom-input');
    div1.innerHTML = `<div class="board-add-card">+ Add Card</div>
`;

    addBoard_ele.appendChild(div);
    addBoard_ele.appendChild(div1);
    boardin.appendChild(addBoard_ele);
    board.appendChild(boardin);
    container.appendChild(board);
};
// ==>
// add card
let addCard = `<div class="custom-input">
<input type="text" class="cardName" placeholder="Enter Card Name ">
<div class="custom-input-foot">
  <button type="submit" class="addBtn_cards">Add</button>
        <p class="close">X</p>
   </div>
</div>`;

let closeCards;

function addingForm() {
    let addCard_btn = document.querySelectorAll(" .board-add-card")
    addCard_btn.forEach((card) => {
        card.addEventListener('click', adding);
    });
}
addingForm();

function adding(e) {
    e.target.parentElement.innerHTML = addCard;
    addCard_btn();
    cardName();
    closeForm();
    deleteBoard();
    deleteCard();
}

function closeForm() {
    closeCards = document.querySelectorAll('.close')
    closeCards.forEach((card, idx) => {
        closeCards[idx].addEventListener('click', (e) => {
            e.target.parentElement.parentElement.parentElement.innerHTML = <p class="board-add-card">+ Add Card</p>
            addCard_btn = document.querySelectorAll(".custom-input .board-add-card")
            addingForm();
        });
    });
}

function addCard_btn() {
    let addCardsButns = document.querySelectorAll('.addBtn_cards');
    addCardsButns.forEach((addBtn) => {
        addBtn.addEventListener('click', (e) => {
            createNewCard();
            console.log(addBtn.parentElement.parentElement.remove());
            // addCard();
        })
    })
}
// craeted Card

function createNewCard() {
    let addBoard_ele = document.querySelector('.board-in');
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    div.classList.add('board-card');
    div.innerHTML =
        `
    <div class="card" draggable="true">
    <div class="card-top">
        <div class="card-top-labels" ><label style="background-color: rgb(207, 97, 161);"></label>
        </div>
        <div class="card-top-more">...
        <button class="delete-btn card_delete_btn">Delete Card</button>
        </div>
    </div>
    <div class="card-title">${enteredCardName}</div>
    <div>
        <p title="Task1 Detail Description"><span class="material-symbols-outlined">
                format_list_bulleted
            </span></p>
    </div>
    <div class="card-footer">
        <p class="card-footer-item"></p>
        <p class="card-footer-item"></p>
    </div> 
`;

    div1.classList.add('custom-input');
    div1.innerHTML = <div class="board-add-card">+ Add Card</div>;
    addBoard_ele.appendChild(div);
    div.appendChild(div1);
    addingForm();
    more_icon();
    deleteCard();
};

// delete board
let delete_boards_menu = document.querySelectorAll('.board-more-btn');
delete_boards_menu.forEach((delete_btn) => {
    delete_btn.addEventListener('click', () => {
        delete_btn.children[0].style.display = 'block';
        deleteBoard();
    })
});

function deleteBoard() {
    let deleteBoard_btns = document.querySelectorAll('.board_delete_btn');
    deleteBoard_btns.forEach((ele, idx) => {
        deleteBoard_btns[idx].addEventListener('click', () => {
            deleteBoard_btns[idx].parentElement.parentElement.parentElement.parentElement.remove();

        })
    })
}

let delete_btns = document.querySelectorAll('.card-top-more');
delete_btns.forEach((delete_btn) => {
    delete_btn.addEventListener('click', () => {
        delete_btn.children[0].style.display = 'block';
        deleteCard();
    })
});

function deleteCard() {
    let deleteCard_btns = document.querySelectorAll('.card_delete_btn');
    deleteCard_btns.forEach((ele, idx) => {
        deleteCard_btns[idx].addEventListener('click', () => {
            //    console.log( deleteCard_btns[idx].parentElement.parentElement.parentElement.innerHTML);;
            deleteCard_btns[idx].parentElement.parentElement.parentElement.remove();
        })
    })
}
// delete cards





// on mouse over
function more_icon() {
    let more_label = document.querySelectorAll('.card-top');
    let more = document.querySelectorAll('.card-top-more');

    more_label.forEach((btn, idx) => {
        btn.addEventListener('mouseenter', () => {
            more[idx].style.display = 'block';

        });
        btn.addEventListener('mouseleave', () => {
            more[idx].style.display = 'none';
        });
    });
}
more_icon();