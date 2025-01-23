import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id:1,
      name:'Thalles', 
      age:33, 
      email: 'thales@gmail.com'
    },
    {
      id:2,
      name:'Carlos',
      age:24,
      email:'carlitos@gmail.com'
    }

  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='inpName' type='text' placeholder='Nome'/>
        <input name='inpIdade' type='text'  placeholder='Idade'/>
        <input name='inpEmail' type='email'  placeholder='Email'/>
        <button type='button' >Cadastrar</button>
      </form>

      {users.map((user) =>
      <div key={user.id} className='card'>
          <div>
            <p>Nome: {user.name} </p>
            <p>Idade: {user.age} </p>
            <p>E-mail: {user.email}</p>
          </div>
        <div>
          <button>
            <img src={Trash}></img>
          </button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Home
