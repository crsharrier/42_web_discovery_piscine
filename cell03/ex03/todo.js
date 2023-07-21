function checkForCookies() {
     const toDoList = document.getElementById('ft_list')
     let savedToDoListHtml = getListFromCookie()
     if (savedToDoListHtml != '') {
          let newTaskDiv = document.createElement('div')
          newTaskDiv.innerHTML = savedToDoListHtml
          document.getElementById('test').innerText = savedToDoListHtml
          toDoList.innerHTML = '';
          toDoList.appendChild(newTaskDiv)
     }
}z

window.addEventListener('beforeunload', saveListAsCookie);

let taskIdCounter = 1;

function addNewTask() {
     const newTaskDiv = document.createElement('div');
     newTaskDiv.id = `task-${taskIdCounter}`;
     newTaskDiv.className = 'task';
     newTaskDiv.onclick = function () {
          removeTask(newTaskDiv)
     };

     let content = prompt('Enter to-do list item:', 'e.g. take out the trash')
     if (content != null) {
          newTaskDiv.innerHTML = content;
     

     const toDoList = document.getElementById('ft_list');
     const firstListItem = toDoList.firstElementChild;

     // Add the 'X' close button inside the new task div
     const xIcon = document.createElement('span');
     xIcon.className = 'xIcon';
     xIcon.innerText = 'X';
     newTaskDiv.appendChild(xIcon);

     toDoList.insertBefore(newTaskDiv, firstListItem);
     taskIdCounter++;
     }
}


function removeTask(taskToClose) {
     if (confirm('Do you want to delete this item?')) {
          const toDoList = document.getElementById('ft_list');
          toDoList.removeChild(taskToClose);
     }
}

function saveListAsCookie() {
     const ftListDiv = document.getElementById('ft_list');
     const listContent = ftListDiv.innerHTML;

     const daysUntilExpiry = 60
     const expirationDate = new Date();
     expirationDate.setTime(expirationDate.getTime() + (daysUntilExpiry * 24 * 60 * 60 * 1000));

     // Set the cookie with the content of the ft_list div and the expiration date
     document.cookie = `ft_list_content=${encodeURIComponent(listContent)}; expires=${expirationDate.toUTCString()}; path=/`;
}

function getListFromCookie() {
     let name = 'ft_list_content=';
     let decodedCookie = decodeURIComponent(document.cookie);
     let cookieArray = decodedCookie.split(';');
     for (let i = 0; i < cookieArray.length; i++) {
          let c = cookieArray[i];
          while (c.charAt(0) == ' ') {
               c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
               return c.substring(name.length, c.length);
          }
     }
     return '';
}

