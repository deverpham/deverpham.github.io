class Chat extends React.Component {
    guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }
    constructor(props) {
        super(props);
        var id =this.guid();
        this.state = {
            chatId : id,
            historyChat: []
        }
        props.database.ref('/chat/' +id)
            .on('child_added',(val)=> {
                         this.state.historyChat.push(val.val())
        var middleman= this.state.historyChat
        this.setState({
                historyChat :middleman
            })
                   var timer =setInterval(function() {
          $('.content-chat').scrollTop(10000) 
       },0)
       setTimeout(function() {
clearInterval(timer)
       },10)
            })
    }
    sendMessage() {
        this.props.database.ref('/chat/' +this.state.chatId + "/"  +this.guid()).set( {
            sender :'you',
            message:this.state.message
        })
        $('.chat-footer input').val('')
       return false;
    }
    setMessage(e) {
        this.setState( {
            message : e.target.value,
            handleInput:e
        })
    }
    render() {
        
        return (
            
        <div id='chatDialog-inchatting-agilecrm-s2' className='shadow get-option'>
          <div className='chatdialog-content list '>
              <div className='header-chat inline f-middle'>
                  <div className=' user-info inline f-middle between w100'>
                      <div className='w70 inline middle user-contact'>
                          <div>
                              <img className='user-avatar img-auto' src="./assets/images/avatar.jpg">
                              </img>
                          </div>
                          <div className='user-name'>
                              <p>Dever Pham</p>
                          </div>
                      </div>
                      <div className='w30 inline feature-icon'>
                          <a href='#'><i className="show-chatalert-button fa fa-close" aria-hidden="true"></i></a>
                      </div>
                  </div>
              </div>
              <div className='content-chat-wrapper  list '>
                  <div className='content-chat  overgrid'>
                      <div className='yourf-message '>
                          <div className='message'>
                              <p>Hello guys,I'm Thinh nice to meet you! <i className="icon-chat icons-list-button fa fa-smile-o icon-in-message" aria-hidden="true"></i></p>
                              
                          </div>
                              
                          
                      </div>
                      
                      {this.state.historyChat.map((chat,i) => {
                          return (
                    <div key={i} className={chat.sender=='you' ? 'you-message ' : 'yourf-message'}>
                          <div className='message'>
                              <p>{chat.message}</p>
                          </div>
                      </div>
                          )
                      })
                          
                          
                      }
                  </div>
              </div>
              <div className='chat-footer list'>
                    <div className=' inline msg-input'>
                        <form action='#' className=' inline between middle w100' noValidate onSubmit={this.sendMessage.bind(this)}>
                            <input onChange={this.setMessage.bind(this)} className='w80' type="text"  placeholder="Write your query here" name=""/>
                            <a  onClick={this.sendMessage.bind(this)} className='submit-msg inline f-middle w20' href="#"><i className="fa fa-angle-right" aria-hidden="true"></i></a>
                        </form>
                    </div>
                    <div className='footer-base-icon inline middle between'>
                        <div className='base-button-tool inline  middle '>
                            <i className="icon-chat fa fa-thumbs-up" aria-hidden="true"></i>
                            <i className="icon-chat fa fa-thumbs-down" aria-hidden="true"></i>
                            <i className="icon-chat icons-list-button fa fa-smile-o" aria-hidden="true"></i>
                        </div>
                        <div className='inline w50 at-end'>
                            <small className ='tex-end Aglie-logogan'>We <i className="fa fa-heart icon-heart" aria-hidden="true"></i> Open Source</small>
                        </div>
                    </div>
                    <div className='free-grid icons-wrapper'>
                        <div className='inline between icons-list'>
                            <img src="./assets/images/icons/icon-1.png" className='icon-img img-auto'></img>
                            <img src="./assets/images/icons/icon-2.png" className='icon-img img-auto'></img>
                            <img src="./assets/images/icons/icon-3.png" className='icon-img img-auto'></img>
                            <img src="./assets/images/icons/icon-4.png" className='icon-img img-auto'></img>
                            <img src="./assets/images/icons/icon-5.png" className='icon-img img-auto'></img>
                        </div>
                    </div>
                  </div>
              </div>
              <div>
                  
              </div>
          </div>
          )
    }
}
class Main extends React.Component {
    constructor()  {
        super()
      var config = {
        apiKey: "AIzaSyCfTxmZIdoak6t06flWKwQZ3vvsSf8BUVU",
        authDomain: "deverpham-b0814.firebaseapp.com",
        databaseURL: "https://deverpham-b0814.firebaseio.com",
        storageBucket: "deverpham-b0814.appspot.com",
        messagingSenderId: "627002789041"
      };
     var app= firebase.initializeApp(config);
     this.state = {
         db : app.database()
     }
    }
    render() {
      return (
        <section className='main'>
            <Header className='header list'>
              <p className='title'>Hi, I'm Deverpham</p>
              <p className='title'> dever.stringJoin('developer','Pham')</p>
            </Header>
            <div className='content flex'>
                <Chat database ={this.state.db } />
                <Info />
                <Activity />
            </div>
        </section>
        )
    }
}

class Info extends React.Component {
    openMessageDialog()   {
        document.querySelector('#chatDialog-inchatting-agilecrm-s2').className+=' chatboxShow';
    }
    render() {
        return (
            <section className='info'>
                <img className='avatar' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/b57fe322433737.5631e82d1086d.png'/>
                <h3 className='title'>
                    Deverpham
                </h3>
                <h5 className='profession'>Full Stack Developer</h5>
                <div className='contact'>
                     <a className='hireMe'>
                    <p>Hire Me</p>
                </a>
                <a className='sendMessage' onClick={this.openMessageDialog}>
                    <p>Send Message</p>
                </a>
                </div>
                <Social />
            </section>
           
            )
    }
}
class Sidebar extends React.Component  {
    render() {
        return (
            <section className='sidebar'>
            <input className='searchInput' />
            <Skills />
            </section>
            )
    }
}
class Skills extends React.Component {
    render() {
        return (
            <section className='skillsArea'>
                <div className='skills'>
                    <h3 className='title'>Front-End Skills</h3>
                    <div className='skill'>
                        <p className='title-child'>HTML5</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>                 
                    <div className='skill'>
                        <p className='title-child'>CSS3</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>                
                    <div className='skill'>
                        <p className='title-child'>JS</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                </div>               
                <div className='skills'>
                    <h3 className='title'>Back-End Skills</h3>
                    <div className='skill'>
                        <p className='title-child'>HTML5</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>                 
                    <div className='skill'>
                        <p className='title-child'>CSS3</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>                
                    <div className='skill'>
                        <p className='title-child'>JS</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                </div>              
                <div className='skills'>
                    <h3 className='title'>Front-End Skills</h3>
                    <div className='skill'>
                        <p className='title-child'>HTML5</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>                 
                    <div className='skill'>
                        <p className='title-child'>CSS3</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>                
                    <div className='skill'>
                        <p className='title-child'>JS</p>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                </div>
            </section>
            
            )
    }
}
class Social extends React.Component {
    render() {
        return (
            <section className='social'>
                <div className='mainSocial'>
                    <div className='middle thinh skype flex'>
                        <i className="fa fa-skype" aria-hidden="true"></i>
                        <div className='detail list'>
                            <p className='socialName'>
                            Skype:
                            </p>
                            <p className='socialValue'>Deverpham</p>
                        </div>
                    </div>
                    <div className='middle thinh linkedin flex'>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                        <div className='detail list'>
                            <p className='socialName'>
                                Linkedin:
                            </p>
                            <p className='socialValue'>Deverpham</p>
                        </div>                    
                    </div>
                </div>
                <div className='listSocial'>
                    <ul>
                        <li>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                            <p>
                                facebook.com/deverpham
                            </p>
                        </li>
                        <li>
                            <i className="fa fa-inbox" aria-hidden="true"></i>
                            <p>
                                deverpham@gmail.com
                            </p>
                        </li>
                        <li>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                            <p>
                                twitter.com/deverpham
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            )
    }
}
class Activity extends React.Component {
    render() {
        return (
            <section className='activity'>
                <RecentWorks/>
                <div className='flex autofull'>
                    <Workexperience />
                    <Education />
                </div>
            </section>
            )
    }
}
class RecentWorks  extends React.Component {
    render() {
        return (
                <section className='recentwork '>
                    <h3 className='title'>Recent works</h3>
                    <div className='flex wrapper'>
                        <div className='work'>
                            <img className='work-feature' src='http://bristowdigital.com/wp-content/uploads/2016/08/iPhone-for-site-layout-1.png'/>
                            <p className='workNane'>Weather App</p>
                            <p className='workDay'>12/05/2017</p>
                        </div>                  
                        <div className='work'>
                            <img className='work-feature' src='https://i.ytimg.com/vi/ByYE9hBfwC4/maxresdefault.jpg'/>
                            <p className='workNane'>Sex App</p>
                            <p className='workDay'>12/05/2017</p>
                        </div>
                        <div className='work'>
                            <img className='work-feature' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeblkF4DAzRSeQFt-0siZVCN0o5WbnczzWyMLH6hCjlDJ1yrEFFw'/>
                            <p className='workNane'>Shop App</p>
                            <p className='workDay'>12/05/2017</p>
                        </div>                        
                        <div className='work'>
                            <img className='work-feature' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSpFM8gAr6Ek13MsMAdvr7EtRn_svQrb5ewVCg18KbZe6oc3o0s'/>
                            <p className='workNane'>Cleaner App</p>
                            <p className='workDay'>12/05/2017</p>
                        </div>                        
                        
                    </div>
                </section>
            )
    }
}
class Workexperience extends React.Component {
    render() {
        return (
                <section className='workExperience'>
                    <h3 className='title'>WORK EXPERIENCE</h3>
                    <timeline>
                        <field>
                            <dot>
                            </dot>
                            <p className='time'>
                            12/05/1996
                            </p>
                            <p className='position'>
                                FullStack Developer
                            </p>
                            <p className='company'>
                            Google INC
                            </p>
                        </field>
                                                <field>
                            <dot>
                            </dot>
                            <p className='time'>
                            12/05/1996
                            </p>
                            <p className='position'>
                                FullStack Developer
                            </p>
                            <p className='company'>
                            Google INC
                            </p>
                        </field>
                    </timeline>                    

                </section>
            )
    }
}
class Education extends React.Component {
    render() {
        return (
                <section className='workExperience'>
                    <h3 className='title'>EDUCATION</h3>
                    <timeline>
                        <field>
                            <dot>
                            </dot>
                            <p className='time'>
                            12/05/1996
                            </p>
                            <p className='position'>
                                FullStack Developer
                            </p>
                            <p className='company'>
                            Google INC
                            </p>
                        </field>
                                                <field>
                            <dot>
                            </dot>
                            <p className='time'>
                            12/05/1996
                            </p>
                            <p className='position'>
                                FullStack Developer
                            </p>
                            <p className='company'>
                            Google INC
                            </p>
                        </field>
                    </timeline>                    

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
$(document).ready(function() {
    $('.content-chat').perfectScrollbar();
    $('.icons-list-button').click(function() {
        $('.icons-list').toggleClass('show');
        $(this).toggleClass('show');
    })
    $('.show-chatalert-button').click(function() {
        $('#chatDialog-inchatting-agilecrm-s2').toggleClass('chatboxShow');
    })
    $('#agilecrm-button-chat').click(function() {
        $('.agilecrm').toggleClass('agilecrm-show');
            $(this).find('i').each(function() {
              $(this).toggleClass('fa-close');
              $(this).toggleClass('fa-cloud')
           })
    })
})