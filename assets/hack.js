 class Main extends React.Component {
   
    render() {
      return (
        <section className='main'>
            <Header className='header list'>
              <p className='title'>Hi, I'm Deverpham</p>
              <p className='title'> dever.stringJoin('developer','Pham')</p>
            </Header>
            <div className='content'>
                <Info />
            </div>
        </section>
        )
    }
}

class Info extends React.Component {
    render() {
        return (
            <section className='info'>
                <img className='avatar' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/b57fe322433737.5631e82d1086d.png'/>
                <h3 className='title'>
                    Deverpham
                </h3>
                <h5 className='profession'>Full Stack Developer</h5>
                <div className='contact'>
                     <a className='hideMe'>
                    <p>Hide Me</p>
                </a>
                <a className='sendMessage'>
                    <p>Send Message</p>
                </a>
                </div>
            </section>
            )
    }
}
class Sidebar extends React.Component  {
    render() {
        return (
            <section className='sidebar'>
            </section>
            )
    }
}

class Header extends React.Component {
    render() {
        return  (
            <header>
                <middle>
                    <autofull>
                    </autofull>
                    <div className='rightHeader'>
                        <ul className='listMenu'>
                            <li>
                                <a>
                                    About Me
                                </a>
                            </li>
                        </ul>
                    </div>
                </middle>
            </header>
            )
    }
}
const content = (
    <div className='flex'>
        <Main />
        <Sidebar />
    </div>

);
 ReactDOM.render(
  content,
  document.getElementById('deverpham')
);