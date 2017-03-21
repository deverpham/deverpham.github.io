 class Main extends React.Component {
   
    render() {
      return (
        <section className='main'>
            <Header className='header list'>
              <p className='title'>Hi, I'm Deverpham</p>
              <p className='title'> dever.stringJoin('developer','Pham')</p>
            </Header>
            <div className='content flex'>
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