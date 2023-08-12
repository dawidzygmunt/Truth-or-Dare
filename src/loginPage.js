import './App.css';

function SubmitButton(){
  return (
    <input type="submit" value="Zaloguj" />
  )
}

function Register(){
  return (
    <div className='register'>
      Nie masz jeszcze konta? <br />
      <a href="/#">Zarejestruj się teraz!</a>
    </div>
  )
}

function PasswRecovery(){
  return(
    <div className='pass-recover'>
      <a href="/#">Zapomniełeś hasła?</a>
    </div>
  )
}

function LoginPanel() {
  return (
    <div className='main-frame'>
      <div className="login-form">
        <h1>Zaloguj się</h1>
        <form action="">
          <div className='text-field'>
            <Username />
            <Password />
          </div>
          <PasswRecovery />
          <SubmitButton />
          <Register />
        </form>
      </div>
    </div>
  )
}

function Username(){
  return (
    <div className='div-login'>
      <input className='form-input' type="text" required/>
      <span></span>
      <label>Login</label>
    </div>
  )
}

function Password(){
  return(
    <div className='div-passw'>
      <input className='form-input' type="password" required />
      <span></span>
      <label>Hasło</label>
    </div>
  )
}



function LoginPage() {
  return (
    <div className="App">
      <LoginPanel />
      
    </div>
  );
}

export default LoginPage;
