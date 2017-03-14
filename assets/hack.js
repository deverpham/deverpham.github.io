 class Header extends React.Component {
   
    render() {
      return (
        <section className='header list'>
          <p className='title'>Hi, I'm Deverpham</p>
          <p className='title'> dever.stringJoin('developer','Pham')</p>
        </section>
        )
    }
}
 
 const content = (
    <Header />
   )
 ReactDOM.render(
  content,
  document.getElementById('deverpham')
);