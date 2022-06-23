import '../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
function Group4(){
  let grp4 = [{
    name: 'Arzoo Fatima',
    enrollment: '02-131192-032',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
},{
    name: 'Abdullah Iqbal',
    enrollment: '02-131192-076',
    github:'https://github.com/AbdullahIqbal10/Assignment-2-web-engineering',
    live: 'https://abdullahiqbal10.github.io/Assignment-2-web-engineering/'
},{
    name: 'Arshia Naveed',
    enrollment: '02-131192-026',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
},{
    name: 'Shahwaiz Hassan',
    enrollment: '02-131192-006',
    github:'https://github.com/arzoofatima52/HIJABISTAA-2.git',
    live: 'https://arzoofatima52.github.io/HIJABISTAA-2/Assignment-2/index.html'
}];
    return(
        <>
      
         <div className='members'>

         {
            grp4.map((e)=>{
                return(<div>
                    <figure> 
                          <figcaption><br/> {e.name} <br/><span>{e.enrollment}</span> </figcaption>
                          <div class="buttons">
                              <div>
                                  <span><a class="icons" href={e.github} target="_blank"><GitHubIcon/></a></span>
          
                              </div>
                              <div>
                                  <span><a class="icons" href={e.live} target="_blank"><LanguageIcon/></a></span>
                              </div>
                          </div>
                      </figure>
                  </div>)
            })
         }
            </div>
        </>
    )
}

export default Group4;