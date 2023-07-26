import { db , auth , app } from './firebase.mjs'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAYdVEk6oaTKqbcxZsC8yMzjm0UeHGK0tw",
    authDomain: "user-9d4be.firebaseapp.com",
    projectId: "user-9d4be",
    storageBucket: "user-9d4be.appspot.com",
    messagingSenderId: "999250386518",
    appId: "1:999250386518:web:af204579fe0c34131ee5f7",
    measurementId: "G-VCP3ZRZR58"
  };
  

const add = document.getElementById('add')
const input = document.getElementById('input')
const todo = document.getElementById('todo-list')

add.addEventListener('click', async () => {
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            todo: input.value
        });
        Swal.fire({
            title: `Todo Added`,
            icon: 'success'
        }).then(() => {
            location.reload()
        })
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        Swal.fire({
            title: `An Error Occured Adding Todo`,
            icon: 'error'
        })
        console.error("Error adding document: ", e);
    }
})
async function showTodos() {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
        todo.innerHTML += `
        <li class="list-item">
                <p class="text">${doc.data().todo}</p>
                <button onclick="UpTodo('${doc.id}')"><i class='fas fa-edit' onclick='UpTodo("${doc.id}")'></i>Edit</button>
                <button onclick="delTodo('${doc.id}')"><i class='fa-solid fa-trash' onclick='delTodo("${doc.id}")'></i>Delete</button>
                </li>
                `
    });

}
showTodos()

function delTodo(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then(async(result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your Todo has been deleted.',
                'success'
                )
                await deleteDoc(doc(db, "todos", id));
                location.reload()
        }
    })
}
window.delTodo = delTodo

function UpTodo(id) {
    const store = doc(db, "todos", id);
    Swal.fire({
        title: `Enter Value to Update`,
        input: 'text',
        confirmButtonText: 'Update / Edit !',
        showLoaderOnConfirm: true,
    }).then(async (result) => {
        if (result.isConfirmed) {
            await updateDoc(store, {
                todo : result.value,
            })
            .then(() => {
                location.reload()
            })
        }
    })
}
window.UpTodo = UpTodo
