window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const list_el = document.querySelector('#tasks')
    const header_task = document.querySelector('.header_task')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const task = input.value
        if (!task) {
            return;
        }

        const task_el = document.createElement('div')
        task_el.classList.add('task')

        const task_content = document.createElement('div')
        task_content.classList.add('content')
        task_el.appendChild(task_content)

        const task_input_el = document.createElement('input')
        task_input_el.type = 'text'
        task_input_el.classList.add('text')
        task_input_el.value = task
        task_input_el.setAttribute('readonly', 'readonly')

        task_content.appendChild(task_input_el)
        list_el.appendChild(task_el)

        const actions = document.createElement('div')
        actions.classList.add('actions')

        const edit_button = document.createElement('button')
        edit_button.classList.add('edit')
        edit_button.innerHTML = 'Edit'

        const delete_button = document.createElement('button')
        delete_button.classList.add('delete')
        delete_button.innerHTML = 'Delete'
        actions.appendChild(edit_button)
        actions.appendChild(delete_button)

        task_el.appendChild(actions)

        input.value = ''

        edit_button.addEventListener('click', () => {
            if (edit_button.innerHTML == 'Edit') {
                edit_button.innerHTML = 'Save'
                task_input_el.removeAttribute('readonly')
            }
            else {
                if (task_input_el.value !== '') {
                    edit_button.innerHTML = 'Edit'
                    task_input_el.setAttribute('readonly', 'readonly')
                    task_input_el.placeholder = 'Please Write your task'
                }
            }
        })

        delete_button.addEventListener('click', () => {
            list_el.removeChild(task_el)
        })

        const all_task_el = document.querySelectorAll(".task");
        const del_all_tasks = document.createElement('input')
        if (all_task_el.length == 2) {
            del_all_tasks.value = 'Delete all Tasks'
            del_all_tasks.type = 'submit'
            header_task.insertAdjacentElement('afterend', del_all_tasks)
        }

        const yes_btn = document.createElement('button')
        const no_btn = document.createElement('button')
        const delete_title = document.createElement('h2')
        const del_tasks = document.createElement('div')
        del_tasks.classList.add('del_tasks')

        del_all_tasks.addEventListener('click', () => {
            delete_title.innerHTML = 'Do you sure to delete your all tasks'
            yes_btn.innerHTML = 'Yes'
            no_btn.innerHTML = 'No'

            yes_btn.classList.add('yes')
            no_btn.classList.add('no')

            del_tasks.appendChild(delete_title)
            del_tasks.appendChild(yes_btn)
            del_tasks.appendChild(no_btn)
            del_all_tasks.insertAdjacentElement('afterend', del_tasks)
        })

        yes_btn.addEventListener('click', () => {
            list_el.innerHTML = "";
            del_all_tasks.remove()
            del_tasks.remove()
        })

       no_btn.addEventListener('click', () => {
            del_tasks.remove()
        })
    })
})